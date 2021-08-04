import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFullListComponent } from './team-full-list.component';

describe('TeamFullListComponent', () => {
  let component: TeamFullListComponent;
  let fixture: ComponentFixture<TeamFullListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamFullListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
