import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {
  @Input('value') value: number = 0;

  starsArray = [false, false, false, false, false];

  ngOnInit() {
    for(let i = 0; i < this.starsArray.length; i++) {
      if(i < this.value && !this.starsArray[i]) {
        this.starsArray[i] = true;
      }
    }
  }
}
