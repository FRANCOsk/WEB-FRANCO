import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blok',
  standalone: false,
  templateUrl: './blok.component.html',
  styleUrls: ['./blok.component.css']
})
export class BlokComponent implements OnInit {
  @Input() header = 'Empty header';
  @Input() text = 'Empty text';

  constructor() {}

  ngOnInit(): void {}
}
