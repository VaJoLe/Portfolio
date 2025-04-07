import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLanguage: string = 'DE'; // Standardwert







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

    // Direkt beim Init aktivieren (falls schon Hash da ist)
    activateLinkByHash();

    // Click-Handler für alle Menü-Links
    links.forEach((link) => {
      link.addEventListener('click', () => {
        setTimeout(activateLinkByHash, 0);
      });
    });
  }


  setLanguage(lang: string) {
    this.activeLanguage = lang;
  }
}
