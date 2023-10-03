import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsavedChangesPageComponent } from './unsaved-changes-page.component';

describe('UnsavedChangesPageComponent', () => {
  let component: UnsavedChangesPageComponent;
  let fixture: ComponentFixture<UnsavedChangesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsavedChangesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsavedChangesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
