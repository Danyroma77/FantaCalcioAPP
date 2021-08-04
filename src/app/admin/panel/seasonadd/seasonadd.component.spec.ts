import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonaddComponent } from './seasonadd.component';

describe('SeasonaddComponent', () => {
  let component: SeasonaddComponent;
  let fixture: ComponentFixture<SeasonaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
