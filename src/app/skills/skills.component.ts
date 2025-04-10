import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  imageList: { title: string; image: string }[] = [
    {
      title: 'HTML',
      image: '/assets/skills/html.png'
    },
    {
      title: 'CSS',
      image: '/assets/skills/CSS.png'
    },
    {
      title: 'JavaScript',
      image: '/assets/skills/Js.png'
    },
    {
      title: 'TypeScript',
      image: '/assets/skills/Ts.png'
    },
    {
      title: 'Angular',
      image: '/assets/skills/Angular.png'
    },
    {
      title: 'Firebase',
      image: '/assets/skills/Firebase.png'
    },
    {
      title: 'Git',
      image: '/assets/skills/Git.png'
    },
    {
      title: 'Rest API',
      image: '/assets/skills/API.png'
    },
    {
      title: 'Scrum',
      image: '/assets/skills/Scrum.png'
    },
    {
      title: 'Material Design',
      image: '/assets/skills/MD.png'
    },
    {
      title: 'Continually Learning',
      image: '/assets/skills/Interest.png'
    }
 ];

  }
