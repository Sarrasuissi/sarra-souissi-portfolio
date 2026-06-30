// import { Routes } from '@angular/router';

// export const routes: Routes = [];



import { Routes } from '@angular/router';
import { Home } from './pages/home/home';  // ✅ Import de Home

export const routes: Routes = [
  { path: '', component: Home },  // ✅ Utilisation de Home
  { path: '**', redirectTo: '' }
];