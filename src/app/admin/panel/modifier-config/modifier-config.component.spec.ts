import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierConfigComponent } from './modifier-config.component';

describe('ModifierConfigComponent', () => {
  let component: ModifierConfigComponent;
  let fixture: ComponentFixture<ModifierConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
