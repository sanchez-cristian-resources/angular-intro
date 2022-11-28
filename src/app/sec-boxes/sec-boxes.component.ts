import { Component } from '@angular/core';

@Component({
  selector: 'sec-boxes',
  templateUrl: './sec-boxes.component.html',
  styleUrls: ['./sec-boxes.component.css']
})
export class SecBoxesComponent {
    clicked(): void {
        alert('CLICKED BUTTON')  
    }

    onSelect(): void {
        alert('WARNING: SELECTED TITLE')  
    }
}
