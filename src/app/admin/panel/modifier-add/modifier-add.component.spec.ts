import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAddComponent } from './modifier-add.component';

describe('ModifierAddComponent', () => {
  let component: ModifierAddComponent;
  let fixture: ComponentFixture<ModifierAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
