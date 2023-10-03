import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseRedirectedPageComponent } from './reverse-redirected-page.component';

describe('ReverseRedirectedPageComponent', () => {
  let component: ReverseRedirectedPageComponent;
  let fixture: ComponentFixture<ReverseRedirectedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseRedirectedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseRedirectedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
