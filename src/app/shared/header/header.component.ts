import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLanguage: 'en' | 'de' = 'de';
  isMobileMenuOpen = false;

  constructor(private translate: TranslateService) {
    const current =
      this.translate.currentLang || this.translate.getDefaultLang() || 'de';
    this.activeLanguage = current as 'en' | 'de';
    this.translate.use(this.activeLanguage);

    this.translate.onLangChange.subscribe((event) => {
      this.activeLanguage = event.lang as 'en' | 'de';
    });
  }

  ngAfterViewInit(): void {
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('touchstart', () => {
      this.toggleMobileMenu();
    });
  }
}


  setLanguage(lang: 'en' | 'de') {
    if (this.activeLanguage !== lang) {
      this.translate.use(lang);
      this.activeLanguage = lang;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
