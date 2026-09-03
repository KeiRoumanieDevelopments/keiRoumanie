import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-romania',
  imports: [RouterLink],
  templateUrl: './romania.html',
  styleUrl: './romania.css',
  host: { class: 'page-route' },
})
export class Romania {}
