import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExistingWorkItemComponent } from './create-existing-work-item.component';

describe('CreateExistingWorkItemComponent', () => {
  let component: CreateExistingWorkItemComponent;
  let fixture: ComponentFixture<CreateExistingWorkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExistingWorkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExistingWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
