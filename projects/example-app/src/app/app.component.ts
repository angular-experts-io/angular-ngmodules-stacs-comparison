import { Component } from '@angular/core';

@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host {
        @apply flex flex-col h-screen;
      }
    `,
  ],
})
export class AppComponent {
  year = new Date().getFullYear();
}
