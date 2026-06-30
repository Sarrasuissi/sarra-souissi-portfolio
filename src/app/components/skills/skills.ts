// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-skills',
//   imports: [],
//   templateUrl: './skills.html',
//   styleUrl: './skills.scss',
// })
// export class Skills {}



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',  // ✅ Ce sélecteur est utilisé dans home.html
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {}