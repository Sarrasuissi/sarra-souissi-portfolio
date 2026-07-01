import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  selectedCategory: string = 'Tous';

  categories: string[] = [
    'Tous',
    'Immobilier',
    'Construction',
    'Architecture',
    'Rénovation',
    'Consulting',
    'Web',
  ];

  allProjects = [
    {
      name: 'Maison Presto',
      url: 'https://www.maison-presto.com/',
      logo: 'https://www.maison-presto.com/assets/icons/logo-maison-presto.webp',
      category: 'Immobilier',
    },
    {
      name: 'Open Mur',
      url: 'https://www.open-mur.com/',
      logo: 'https://www.open-mur.com/assets/logo-op.webp',
      category: 'Construction',
    },
    {
      name: 'Architectis',
      url: 'https://www.architectis.fr/',
      logo: 'https://www.architectis.fr/assets/icons/logo-architectis.webp',
      category: 'Architecture',
    },
    {
      name: 'Mur Mur',
      url: 'https://www.mur-mur.fr/',
      logo: 'https://www.mur-mur.fr/assets/icons/mur-mur-logo.webp',
      category: 'Rénovation',
    },
    {
      name: 'Enea Home',
      url: 'https://eneahome.com',
      logo: 'https://www.eneahome.com/icons/logo.webp',
      category: 'Immobilier',
    },
    {
      name: 'Hostinger Site',
      url: 'https://lightslategray-nightingale-538581.hostingersite.com/',
      logo: 'https://lightslategray-nightingale-538581.hostingersite.com/assets/icons/logo.webp',
      category: 'Web',
    },
    {
      name: 'Mes Murs',
      url: 'https://www.mesmurs.fr/',
      logo: 'https://www.mesmurs.fr/assets/images/MesMures-logo.webp',
      category: 'Construction',
    },
    {
      name: 'Agexis',
      url: 'https://agexis.com/',
      logo: 'https://agexis.com/assets/icons/logo-agex.webp',
      category: 'Consulting',
    },
    {
      name: 'Renov En Main',
      url: 'https://www.renov-en-main.fr/',
      logo: 'https://www.renov-en-main.fr/assets/icons/renov-en-main-logo.webp',
      category: 'Rénovation',
    },
    {
      name: 'Mur et Trémie',
      url: 'https://www.mur-et-tremie.com/',
      logo: 'https://www.mur-et-tremie.com/assets/images/logo-mur-et-remie.webp',
      category: 'Construction',
    },
    {
      name: 'Linkea Consulting',
      url: 'https://linkea-consulting.com/',
      logo: 'https://linkea-consulting.com/assets/icons/logo-linkea.webp',
      category: 'Consulting',
    },
    {
      name: 'Welldup',
      url: 'https://www.welldup.com/',
      logo: 'https://www.welldup.com/assets/icons/logo-menu.webp',
      category: 'Consulting',
    },
    {
      name: 'AB Engineering',
      url: 'https://www.ab-engineering.fr/',
      logo: 'https://www.ab-engineering.fr/assets/logo.webp',
      category: 'Construction',
    },
    {
      name: 'Ikonoklass',
      url: 'https://www.ikonoklass.fr/',
      logo: 'https://www.ikonoklass.fr/assets/icons/logo1.webp',
      category: 'Architecture',
    },
    {
      name: 'Reno Deco',
      url: 'https://reno-deco.fr/',
      logo: 'https://reno-deco.fr/assets/icons/logo.webp',
      category: 'Rénovation',
    },
    {
      name: 'Global Reno',
      url: 'https://www.global-reno.com/',
      logo: 'https://www.global-reno.com/assets/logo.webp',
      category: 'Rénovation',
    },
    {
      name: 'Agexea Energie',
      url: 'https://www.agexea-energie.com/',
      logo: 'https://www.agexea-energie.com/assets/images/home/logo-site.webp',
      category: 'Construction',
    },
    {
      name: 'Facilitys International',
      url: 'https://facilitys-international.fr/',
      logo: 'https://facilitys-international.fr/assets/icons/logo-facilitys.webp',
      category: 'Consulting',
    },
    {
      name: 'Strategys Tunisie',
      url: 'https://www.strategys-tunisie.com/',
      logo: 'https://www.strategys-tunisie.com/assets/icons/logo.webp',
      category: 'Consulting',
    },
    {
      name: 'Finky Consulting',
      url: 'https://www.finky-consulting.com/',
      logo: 'https://www.finky-consulting.com/assets/icons/logo-menu.webp',
      category: 'Consulting',
    },
    {
      name: '1001 Architectures',
      url: 'https://1001-architectures.com/',
      logo: 'https://1001-architectures.com/assets/icons/logo.webp',
      category: 'Architecture',
    },
    {
      name: 'Yellow Lobster',
      url: 'https://yellow-lobster-107594.hostingersite.com/',
      logo: 'https://yellow-lobster-107594.hostingersite.com/assets/icons/logo.webp',
      category: 'Web',
    },
    {
      name: 'Wellton Consulting',
      url: 'https://www.wellton-consulting.com/',
      logo: 'https://www.wellton-consulting.com/assets/images/logo.webp',
      category: 'Consulting',
    },
    {
      name: 'Enea Construction',
      url: 'https://www.enea-construction.com/',
      logo: 'https://www.enea-construction.com/assets/icons/logo-menu.webp',
      category: 'Construction',
    },
    {
      name: 'Gex Batiment',
      url: 'https://www.gex-batiment.com/',
      logo: 'https://www.gex-batiment.com/assets/icons/gex.webp',
      category: 'Construction',
    },
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'Tous') {
      return this.allProjects;
    }
    return this.allProjects.filter((project) => project.category === this.selectedCategory);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    console.log('Filtre sélectionné:', category);
    console.log('Projets trouvés:', this.filteredProjects.length);
  }
}
