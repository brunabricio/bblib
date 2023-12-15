import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  @Input('color') value: 'primary' | 'green' | 'yellow' | 'red' = 'primary';
}
