import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleDireComponent } from './style-dire.component';

describe('StyleDireComponent', () => {
  let component: StyleDireComponent;
  let fixture: ComponentFixture<StyleDireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleDireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleDireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
