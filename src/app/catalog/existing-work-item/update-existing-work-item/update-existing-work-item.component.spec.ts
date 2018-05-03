import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExistingWorkItemComponent } from './update-existing-work-item.component';

describe('UpdateExistingWorkItemComponent', () => {
  let component: UpdateExistingWorkItemComponent;
  let fixture: ComponentFixture<UpdateExistingWorkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExistingWorkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExistingWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
