import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  host: { class: 'page-route' },
})
export class Contact {
  protected readonly status = signal<SubmitStatus>('idle');

  protected async submit(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => body.append(key, String(value)));

    this.status.set('sending');

    try {
      // Le POST vise le fichier statique : envoyé vers une route Angular, il serait
      // intercepté par la fonction SSR et n'atteindrait jamais le traitement Netlify.
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`Réponse ${response.status}`);
      }

      form.reset();
      this.status.set('sent');
    } catch {
      this.status.set('error');
    }
  }
}
