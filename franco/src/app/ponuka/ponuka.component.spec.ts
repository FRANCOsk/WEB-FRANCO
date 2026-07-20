import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonukaComponent } from './ponuka.component';
import { BlokComponent } from '../blok/blok.component';

describe('PonukaComponent', () => {
  let component: PonukaComponent;
  let fixture: ComponentFixture<PonukaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PonukaComponent, BlokComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
