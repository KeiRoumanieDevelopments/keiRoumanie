import { Component } from '@angular/core';
import { PagePlaceholder } from '../../shared/page-placeholder/page-placeholder';

@Component({
  selector: 'app-about',
  imports: [PagePlaceholder],
  templateUrl: './about.html',
  styleUrl: './about.css',
  host: { class: 'page-route' },
})
export class About { }
