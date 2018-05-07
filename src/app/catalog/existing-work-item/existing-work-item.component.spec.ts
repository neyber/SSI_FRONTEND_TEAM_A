import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingWorkItemComponent } from './existing-work-item.component';

describe('ExistingWorkItemComponent', () => {
  let component: ExistingWorkItemComponent;
  let fixture: ComponentFixture<ExistingWorkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingWorkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
