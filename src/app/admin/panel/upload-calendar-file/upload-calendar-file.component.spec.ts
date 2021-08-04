import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCalendarFileComponent } from './upload-calendar-file.component';

describe('UploadCalendarFileComponent', () => {
  let component: UploadCalendarFileComponent;
  let fixture: ComponentFixture<UploadCalendarFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCalendarFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCalendarFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
