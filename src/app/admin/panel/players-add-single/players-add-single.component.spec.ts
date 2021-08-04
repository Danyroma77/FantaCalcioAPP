import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersAddSingleComponent } from './players-add-single.component';

describe('PlayersAddSingleComponent', () => {
  let component: PlayersAddSingleComponent;
  let fixture: ComponentFixture<PlayersAddSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersAddSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersAddSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
