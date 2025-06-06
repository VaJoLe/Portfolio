import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contactMedia.component.scss'],
})
export class ContactComponent {
  http = inject(HttpClient);
  blurStates: Record<string, boolean> = {
    name: false,
    email: false,
    message: false,
  };

  contactForm = {
    controls: {
      name: { invalid: false },
      email: { invalid: false },
      message: { invalid: false },
    },
  };

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  };

  mailTest = false;

  successMessageVisible = false;

  post = {
    endPoint: 'https://jonas-valtin.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => this.showSuccessAndReset(ngForm),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.showSuccessAndReset(ngForm);
    }
  }

  private showSuccessAndReset(ngForm: NgForm) {
    this.successMessageVisible = true;
    setTimeout(() => {
      this.successMessageVisible = false;
      ngForm.resetForm();
    }, 5000);
  }
}
