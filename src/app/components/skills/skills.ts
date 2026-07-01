import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories = [
    {
      name: 'Front-end',
      icon: '🎨',
      skills: [
        'Next.js',
        'React',
        'Angular',
        'JavaScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'Bootstrap',
      ],
    },
    {
      name: 'Back-end',
      icon: '⚙️',
      skills: [
        'Node.js',
        'Express.js',
        'Spring Boot',
        'Java',
        'PHP',
        'Laravel',
        'API REST',
        'Postman',
      ],
    },
    {
      name: 'Bases de données',
      icon: '🗄️',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      name: 'Outils & Méthodes',
      icon: '🛠️',
      skills: ['Git/GitHub', 'Agile/Scrum', 'Trello', 'Figma', 'Adobe XD'],
    },
    {
      name: 'IoT & Mobile',
      icon: '📱',
      skills: ['ESP32', 'Arduino', 'Systèmes embarqués', 'Android'],
    },
    {
      name: 'Microsoft Office',
      icon: '📊',
      skills: ['Word', 'Excel', 'PowerPoint'],
    },
  ];
}
