import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasoneditComponent } from './seasonedit.component';

describe('SeasoneditComponent', () => {
  let component: SeasoneditComponent;
  let fixture: ComponentFixture<SeasoneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasoneditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasoneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
