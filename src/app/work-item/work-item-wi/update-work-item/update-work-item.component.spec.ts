import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkItemComponent } from './update-work-item.component';

describe('UpdateWorkItemComponent', () => {
  let component: UpdateWorkItemComponent;
  let fixture: ComponentFixture<UpdateWorkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWorkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
