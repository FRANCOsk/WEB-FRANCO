import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlokComponent } from '../blok/blok.component';
import { DodatokComponent } from './dodatok.component';

describe('DodatokComponent', () => {
  let component: DodatokComponent;
  let fixture: ComponentFixture<DodatokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DodatokComponent, BlokComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
