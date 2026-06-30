// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   imports: [],
//   templateUrl: './home.html',
//   styleUrl: './home.scss',
// })
// export class Home {}



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Projects } from '../../components/projects/projects';
import { Experience } from '../../components/experience/experience';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Hero,        // ✅ Ajouté
    About,       // ✅ Ajouté
    Skills,      // ✅ Ajouté
    Projects,    // ✅ Ajouté
    Experience,  // ✅ Ajouté
    Contact      // ✅ Ajouté
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}