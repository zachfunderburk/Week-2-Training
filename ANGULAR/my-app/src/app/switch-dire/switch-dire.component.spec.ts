import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDireComponent } from './switch-dire.component';

describe('SwitchDireComponent', () => {
  let component: SwitchDireComponent;
  let fixture: ComponentFixture<SwitchDireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchDireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchDireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
