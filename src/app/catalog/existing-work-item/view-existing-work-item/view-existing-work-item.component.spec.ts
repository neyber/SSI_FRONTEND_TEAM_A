import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExistingWorkItemComponent } from './view-existing-work-item.component';

describe('ViewExistingWorkItemComponent', () => {
  let component: ViewExistingWorkItemComponent;
  let fixture: ComponentFixture<ViewExistingWorkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExistingWorkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExistingWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
