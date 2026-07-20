import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-baner',
  standalone: false,
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit {
  @Input() header = '';
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
