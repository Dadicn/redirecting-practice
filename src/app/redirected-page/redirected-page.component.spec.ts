import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectedPageComponent } from './redirected-page.component';

describe('RedirectedPageComponent', () => {
  let component: RedirectedPageComponent;
  let fixture: ComponentFixture<RedirectedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
