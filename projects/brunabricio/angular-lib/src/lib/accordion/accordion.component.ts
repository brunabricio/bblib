import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const acc = document.getElementsByClassName("accordion");
    
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function(this: HTMLElement) {
        this.classList.toggle("active");
        const panel = this.nextElementSibling as HTMLElement;
        panel.classList.toggle("hidden");
        panel.classList.toggle("visible");
      });
    }
  }
}
