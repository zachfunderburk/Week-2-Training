import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServDemo2Component } from './serv-demo2.component';

describe('ServDemo2Component', () => {
  let component: ServDemo2Component;
  let fixture: ComponentFixture<ServDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServDemo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
