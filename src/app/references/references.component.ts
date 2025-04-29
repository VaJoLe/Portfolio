import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  currentIndex = 0;
  references: any[] = [];

  constructor(private translate: TranslateService) {
    this.loadReferences();

    this.translate.onLangChange.subscribe(() => this.loadReferences());
  }

  loadReferences() {
    this.translate.get('REFERENCES').subscribe((data) => {
      this.references = data;
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.references.length) % this.references.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
