import { Component } from '@angular/core';
import { PagePlaceholder } from '../../shared/page-placeholder/page-placeholder';

@Component({
  selector: 'app-contact',
  imports: [PagePlaceholder],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  host: { class: 'page-route' },
})
export class Contact {}
