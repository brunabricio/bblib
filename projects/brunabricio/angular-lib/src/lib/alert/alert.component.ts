import { Component } from '@angular/core';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  closeAlert() {
    const alertElement = document.querySelector('.alert') as HTMLElement;
    
    if (alertElement) {
      alertElement.style.display = 'none';
    }
  }
}
