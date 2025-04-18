import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: any[] = [];
  portfolioIntro: string = '';

  constructor(private translate: TranslateService) {
    this.loadTranslatedProjects();
    // Sprache wechseln → neu laden
    this.translate.onLangChange.subscribe(() => this.loadTranslatedProjects());
  }

  loadTranslatedProjects() {
    this.translate.get('PORTFOLIO.PROJECTS').subscribe((projects) => {
      this.projects = projects;
    });

    this.translate.get('PORTFOLIO.INTRO').subscribe((intro) => {
      this.portfolioIntro = intro;
    });
  }
}
