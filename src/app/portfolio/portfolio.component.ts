import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Join',
      techStack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      liveUrl: 'https://your-join-live-url.com',
      githubUrl: 'https://github.com/your-repo/join',
      imageUrl: 'assets/projects/Join.png',
    },
    {
      title: 'ElPolloLoco',
      techStack: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      liveUrl: 'https://your-sharkie-live-url.com',
      githubUrl: 'https://github.com/VaJoLe/ElPolloLoco',
      imageUrl: 'assets/projects/ElPolloLoco.png',
    },
    {
      title: 'Pokedex',
      techStack: 'JavaScript | HTML | CSS | API',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      liveUrl: 'https://your-sharkie-live-url.com',
      githubUrl: 'https://github.com/VaJoLe/PokeDex',
      imageUrl: 'assets/projects/Pokedex.png',
    },
    // weitere Projekte...
  ];

}
