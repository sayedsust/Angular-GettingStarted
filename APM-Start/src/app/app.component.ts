import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
  <div> My First componnet</div>
  `
})
export class AppComponent {
  pageTitle: string = 'Angular: Getting Started';
}
