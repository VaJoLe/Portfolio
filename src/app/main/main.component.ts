import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { HeroComponent } from '../hero/hero.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ReferencesComponent } from '../references/references.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    HeroComponent,
    PortfolioComponent,
    ReferencesComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
