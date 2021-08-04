import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersGradesComponent } from './players-grades.component';

describe('PlayersGradesComponent', () => {
  let component: PlayersGradesComponent;
  let fixture: ComponentFixture<PlayersGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
