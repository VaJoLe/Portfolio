import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() techStack!: string;
  @Input() liveUrl!: string;
  @Input() githubUrl!: string;
  @Input() imageUrl!: string;
  @Input() reversed: boolean = false;
}
