import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-placeholder',
  templateUrl: './page-placeholder.html',
  styleUrl: './page-placeholder.css',
})
export class PagePlaceholder {
  readonly pageName = input.required<string>();
}
