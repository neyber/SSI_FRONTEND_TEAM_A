import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkItemComponent } from './view-work-item.component';

describe('ViewWorkItemComponent', () => {
  let component: ViewWorkItemComponent;
  let fixture: ComponentFixture<ViewWorkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWorkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
