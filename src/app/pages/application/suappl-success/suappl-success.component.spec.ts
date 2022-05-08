import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuapplSuccessComponent } from './suappl-success.component';

describe('SuapplSuccessComponent', () => {
  let component: SuapplSuccessComponent;
  let fixture: ComponentFixture<SuapplSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuapplSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuapplSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
