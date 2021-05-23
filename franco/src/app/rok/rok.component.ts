import { Component } from '@angular/core';

@Component({

selector: 'app-rok',
  templateUrl: './rok.component.html',
  styleUrls: ['./rok.component.css']
})

export class RokComponent {

  title = 'n2';

  validate(value: any): boolean{
    if (value.length > 3) {
      return false;
    }
    return true;
  }
}
