import { Component } from '@angular/core';
import { PagePlaceholder } from '../../shared/page-placeholder/page-placeholder';

@Component({
  selector: 'app-pricing',
  imports: [PagePlaceholder],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
  host: { class: 'page-route' },
})
export class Pricing {}
