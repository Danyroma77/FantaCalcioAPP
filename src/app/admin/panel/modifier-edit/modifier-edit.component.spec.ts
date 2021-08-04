import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEditComponent } from './modifier-edit.component';

describe('ModifierEditComponent', () => {
  let component: ModifierEditComponent;
  let fixture: ComponentFixture<ModifierEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
