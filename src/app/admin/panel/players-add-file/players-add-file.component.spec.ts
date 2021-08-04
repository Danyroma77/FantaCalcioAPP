import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersAddFileComponent } from './players-add-file.component';

describe('PlayersAddFileComponent', () => {
  let component: PlayersAddFileComponent;
  let fixture: ComponentFixture<PlayersAddFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersAddFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersAddFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
