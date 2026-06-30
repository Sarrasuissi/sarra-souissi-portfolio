// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-projects',
//   imports: [],
//   templateUrl: './projects.html',
//   styleUrl: './projects.scss',
// })
// export class Projects {}



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',  // ✅ Ce sélecteur est utilisé dans home.html
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}