import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguenewComponent } from './leaguenew.component';

describe('LeaguenewComponent', () => {
  let component: LeaguenewComponent;
  let fixture: ComponentFixture<LeaguenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaguenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
