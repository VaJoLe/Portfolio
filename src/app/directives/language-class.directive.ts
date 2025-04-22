import { Directive, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[appLanguageClass]',
  standalone: true,
})
export class LanguageClassDirective {
  constructor(private translate: TranslateService) {}

  @HostBinding('class.lang-de')
  get isGerman(): boolean {
    return this.translate.currentLang === 'de';
  }

  @HostBinding('class.lang-en')
  get isEnglish(): boolean {
    return this.translate.currentLang === 'en';
  }
}
