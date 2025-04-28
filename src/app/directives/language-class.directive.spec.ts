import { LanguageClassDirective } from './language-class.directive';

describe('LanguageClassDirective', () => {
  it('should create an instance', () => {
    const mockTranslateService = jasmine.createSpyObj('TranslateService', ['get']);
    const directive = new LanguageClassDirective(mockTranslateService);
    expect(directive).toBeTruthy();
  });
});
