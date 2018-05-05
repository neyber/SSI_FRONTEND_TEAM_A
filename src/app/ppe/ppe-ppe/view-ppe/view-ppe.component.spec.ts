import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPpeComponent } from './view-ppe.component';

describe('ViewPpeComponent', () => {
  let component: ViewPpeComponent;
  let fixture: ComponentFixture<ViewPpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
