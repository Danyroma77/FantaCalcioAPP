import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesManagerComponent } from './grades-manager.component';

describe('GradesManagerComponent', () => {
  let component: GradesManagerComponent;
  let fixture: ComponentFixture<GradesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradesManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
