import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkItemClassComponent } from './view-work-item-class.component';

describe('ViewWorkItemClassComponent', () => {
  let component: ViewWorkItemClassComponent;
  let fixture: ComponentFixture<ViewWorkItemClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWorkItemClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorkItemClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
