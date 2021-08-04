import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersManagerComponent } from './players-manager.component';

describe('PlayersManagerComponent', () => {
  let component: PlayersManagerComponent;
  let fixture: ComponentFixture<PlayersManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
