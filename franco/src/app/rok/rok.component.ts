import { Component } from '@angular/core';

@Component({
  selector: 'app-rok',
  standalone: false,
  templateUrl: './rok.component.html',
  styleUrls: ['./rok.component.css']
})
export class RokComponent {
  title = 'n2';

  validate(value: { length: number }): boolean {
    return value.length <= 3;
  }
}
