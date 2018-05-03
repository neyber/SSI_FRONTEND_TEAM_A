import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExistingWorkItemComponent } from './delete-existing-work-item.component';

describe('DeleteExistingWorkItemComponent', () => {
  let component: DeleteExistingWorkItemComponent;
  let fixture: ComponentFixture<DeleteExistingWorkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteExistingWorkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExistingWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
