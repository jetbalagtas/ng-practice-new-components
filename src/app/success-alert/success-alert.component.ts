import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<p>This is the Success Component!</p>`,
  styles: [
    `
    p {
      padding: 20px;
      background-color: palegreen;
      border: 1px solid green;
    }
    `
  ]
})
export class SuccessAlertComponent {

}
