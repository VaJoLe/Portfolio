import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLanguage: string = 'EN';

  constructor(private translate: TranslateService) {
    const current = translate.currentLang || translate.defaultLang;
    this.activeLanguage = current?.toUpperCase() ?? 'EN';
  }

  ngOnInit(): void {
    const links = document.querySelectorAll<HTMLAnchorElement>('.menu a');

    const activateLinkByHash = () => {
      links.forEach((link) => link.classList.remove('active'));
      const hash = window.location.hash;
      const target = document.querySelector(`.menu a[href="${hash}"]`);
      if (target) {
        target.classList.add('active');
      }
    };

    activateLinkByHash();

    links.forEach((link) => {
      link.addEventListener('click', () => {
        setTimeout(activateLinkByHash, 0);
      });
    });
  }

  setLanguage(lang: 'EN' | 'DE') {
    this.activeLanguage = lang;
    this.translate.use(lang.toLowerCase());
  }
}
