import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  imports: [RouterLink],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
  host: { class: 'page-route' },
})
export class Pricing {}
