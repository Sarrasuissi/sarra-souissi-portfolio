// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-experience',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './experience.html',
//   styleUrl: './experience.scss',
// })
// export class Experience {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = [
    {
      period: '2025 – 2026',
      title: 'Développeuse Full-Stack',
      company: 'Inchaate',
      location: 'Tunis',
      description:
        "Création de sites web pour le secteur du consulting, de l'architecture et des services. Conception d'applications web sur mesure avec des technologies modernes.",
      technologies: ['Next.js', 'React', 'Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      color: 'secondary',
      side: 'right',
    },
    {
      period: '2024 – Février 2025',
      title: 'Développeuse Full-Stack',
      company: 'Sybernetys',
      location: 'Tunis',
      description:
        "Création de sites web pour le secteur de la construction, de l'immobilier, de l'architecture et de la rénovation. Développement d'interfaces utilisateur modernes et performantes.",
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      color: 'primary',
      side: 'left',
    },
  ];
}
