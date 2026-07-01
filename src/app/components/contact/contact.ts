// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   imports: [],
//   templateUrl: './contact.html',
//   styleUrl: './contact.scss',
// })
// export class Contact {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  private readonly SERVICE_ID = 'service_dgmdz0m';
  private readonly TEMPLATE_ID = 'template_vov1vwj';
  private readonly PUBLIC_KEY = 'L0NiEmM2guiMmAlF3';

  constructor() {
    emailjs.init(this.PUBLIC_KEY);
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    console.log('📤 Formulaire soumis !');

    const form = event.target as HTMLFormElement;
    const name = (form.querySelector('#name') as HTMLInputElement)?.value || '';
    const email = (form.querySelector('#email') as HTMLInputElement)?.value || '';
    const message = (form.querySelector('#message') as HTMLTextAreaElement)?.value || '';

    console.log('📝 Données:', { name, email, message });

    if (!name || !email || !message) {
      this.errorMessage = '⚠️ Veuillez remplir tous les champs.';
      this.successMessage = '';
      console.log('❌ Champs manquants');
      return;
    }

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      console.log('📤 Envoi vers EmailJS...');

      const now = new Date();
      const dateStr = now.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        current_date: dateStr,
        to_email: 'sarrasouissi13@gmail.com',
      };

      console.log('📦 Template Params:', templateParams);

      const response = await emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams);

      console.log('✅ Réponse EmailJS:', response);

      if (response.status === 200) {
        this.successMessage =
          '✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.';
        this.errorMessage = '';
        form.reset();
        console.log('✅ Formulaire réinitialisé');
      } else {
        this.errorMessage = "❌ Erreur lors de l'envoi. Veuillez réessayer.";
        this.successMessage = '';
        console.log('❌ Erreur status:', response.status);
      }
    } catch (error: any) {
      console.error('❌ Erreur EmailJS:', error);
      this.errorMessage = `❌ Erreur: ${error?.text || "Veuillez réessayer ou m'envoyer un email directement à sarrasouissi13@gmail.com"}`;
      this.successMessage = '';
    } finally {
      this.isLoading = false;
      console.log('🏁 Fin du traitement');
    }
  }
}
