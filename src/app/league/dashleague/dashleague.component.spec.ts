import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashleagueComponent } from './dashleague.component';

describe('DashleagueComponent', () => {
  let component: DashleagueComponent;
  let fixture: ComponentFixture<DashleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashleagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
