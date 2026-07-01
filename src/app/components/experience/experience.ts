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

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-experience',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './experience.html',
//   styleUrl: './experience.scss',
// })
// export class Experience {
//   experiences = [
//     {
//       period: '2025 – 2026',
//       title: 'Développeuse Full-Stack',
//       company: 'Inchaate',
//       location: 'Tunis',
//       description:
//         "Création de sites web pour le secteur du consulting, de l'architecture et des services. Conception d'applications web sur mesure avec des technologies modernes.",
//       technologies: ['Next.js', 'React', 'Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
//       color: 'secondary',
//       side: 'right',
//     },
//     {
//       period: '2024 – Février 2025',
//       title: 'Développeuse Full-Stack',
//       company: 'Sybernetys',
//       location: 'Tunis',
//       description:
//         "Création de sites web pour le secteur de la construction, de l'immobilier, de l'architecture et de la rénovation. Développement d'interfaces utilisateur modernes et performantes.",
//       technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
//       color: 'primary',
//       side: 'left',
//     },
//   ];
// }




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
    // Expériences professionnelles
    {
      period: '2024 – Février 2026',
      title: 'Développeuse Full-Stack',
      company: 'Sybernetys',
      location: 'Tunis',
      description: 'Création de sites web pour le secteur de la construction, de l\'immobilier, de l\'architecture et de la rénovation.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      type: 'work',
      side: 'left'
    },
    {
      period: '2025 – 2026',
      title: 'Développeuse Full-Stack',
      company: 'Inchaate',
      location: 'Tunis',
      description: 'Création de sites web pour le secteur du consulting, de l\'architecture et des services.',
      technologies: ['Next.js', 'React', 'Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      type: 'work',
      side: 'right'
    },
    // Stages
    {
      period: '2023 – 2024',
      title: 'Stagiaire Développeuse Web',
      company: 'Nom de l\'entreprise',
      location: 'Tunis',
      description: 'Développement d\'applications web et apprentissage des bonnes pratiques.',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      type: 'internship',
      side: 'left'
    },
    // Projets de fin d'études
    {
      period: '2023',
      title: 'Projet de Fin d\'Études',
      company: 'Nom de votre école',
      location: 'Tunis',
      description: 'Conception et développement d\'une application web complète.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      type: 'project',
      side: 'right'
    },
    // Formations
    {
      period: '2022 – 2023',
      title: 'Formation Développement Web',
      company: 'Nom de l\'organisme',
      location: 'Tunis',
      description: 'Formation intensive en développement web full-stack.',
      technologies: ['Angular', 'React', 'Node.js'],
      type: 'education',
      side: 'left'
    }
  ];

  getTypeLabel(type: string): string {
    const labels: { [key: string]: string } = {
      'work': '💼 Professionnel',
      'internship': '📚 Stage',
      'project': '🎓 Projet',
      'education': '📖 Formation'
    };
    return labels[type] || type;
  }

  getTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      'work': 'primary',
      'internship': 'secondary',
      'project': 'primary',
      'education': 'secondary'
    };
    return colors[type] || 'primary';
  }
}