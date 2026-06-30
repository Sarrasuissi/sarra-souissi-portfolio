// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-experience',
//   imports: [],
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
export class Experience {}