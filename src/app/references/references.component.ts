import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  currentIndex = 0;

  references = [
    {
      quote: 'Michael really kept the team together with his great organization and clear communication. We wouldn’t have got this far without his commitment.',
      author: 'V. Schuster - Team Partner',
      image: 'assets/references/person1.png'
    },
    {
      quote: 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
      author: 'E.Eichinger - Team Partner',
      image: 'assets/references/person2.png'
    },
    {
      quote: 'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.',
      author: 'I. Nuber - Frontend Engineer',
      image: 'assets/references/person3.png'
    }
  ];

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.references.length) % this.references.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
