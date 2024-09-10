import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbaComponent } from './barba.component';

describe('BarbaComponent', () => {
  let component: BarbaComponent;
  let fixture: ComponentFixture<BarbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
