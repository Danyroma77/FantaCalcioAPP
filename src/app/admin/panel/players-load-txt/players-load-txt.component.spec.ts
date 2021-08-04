import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersLoadTXTComponent } from './players-load-txt.component';

describe('PlayersLoadTXTComponent', () => {
  let component: PlayersLoadTXTComponent;
  let fixture: ComponentFixture<PlayersLoadTXTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersLoadTXTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersLoadTXTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
