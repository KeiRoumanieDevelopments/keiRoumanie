import { Component } from '@angular/core';
import { PagePlaceholder } from '../../shared/page-placeholder/page-placeholder';

@Component({
  selector: 'app-romania',
  imports: [PagePlaceholder],
  templateUrl: './romania.html',
  styleUrl: './romania.css',
  host: { class: 'page-route' },
})
export class Romania {}
