import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkItemWiComponent } from './work-item-wi.component';

describe('WorkItemWiComponent', () => {
  let component: WorkItemWiComponent;
  let fixture: ComponentFixture<WorkItemWiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkItemWiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkItemWiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
