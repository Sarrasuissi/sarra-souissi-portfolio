// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hero',
//   imports: [],
//   templateUrl: './hero.html',
//   styleUrl: './hero.scss',
// })
// export class Hero {}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',  // ✅ Ce sélecteur est utilisé dans home.html
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}