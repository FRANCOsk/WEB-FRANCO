import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlokComponent } from './blok.component';

describe('BlokComponent', () => {
  let component: BlokComponent;
  let fixture: ComponentFixture<BlokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
