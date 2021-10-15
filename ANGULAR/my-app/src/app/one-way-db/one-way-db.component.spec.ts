import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayDBComponent } from './one-way-db.component';

describe('OneWayDBComponent', () => {
  let component: OneWayDBComponent;
  let fixture: ComponentFixture<OneWayDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneWayDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWayDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
