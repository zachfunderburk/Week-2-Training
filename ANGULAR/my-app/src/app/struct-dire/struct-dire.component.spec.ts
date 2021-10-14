import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDireComponent } from './struct-dire.component';

describe('StructDireComponent', () => {
  let component: StructDireComponent;
  let fixture: ComponentFixture<StructDireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructDireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructDireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
