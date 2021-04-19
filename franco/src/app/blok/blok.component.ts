import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blok',
  templateUrl: './blok.component.html',
  styleUrls: ['./blok.component.css']
})
export class BlokComponent implements OnInit {

  @Input() 
  header: string ="Empty header";
  @Input()
  text: string="Empty text";

  constructor() { }

  ngOnInit(): void {
  }

}
