import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonManagerComponent } from './season-manager.component';

describe('SeasonManagerComponent', () => {
  let component: SeasonManagerComponent;
  let fixture: ComponentFixture<SeasonManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
