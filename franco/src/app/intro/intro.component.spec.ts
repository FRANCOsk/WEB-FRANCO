import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanerComponent } from '../baner/baner.component';
import { BootComponent } from '../boot/boot.component';
import { MenuComponent } from '../menu/menu.component';
import { IntroComponent } from './intro.component';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroComponent, MenuComponent, BanerComponent, BootComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
