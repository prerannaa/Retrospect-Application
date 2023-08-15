import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrospectentryComponent } from './retrospectentry.component';

describe('RetrospectentryComponent', () => {
  let component: RetrospectentryComponent;
  let fixture: ComponentFixture<RetrospectentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrospectentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrospectentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
