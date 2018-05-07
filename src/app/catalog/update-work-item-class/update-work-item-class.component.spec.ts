import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkItemClassComponent } from './update-work-item-class.component';

describe('UpdateWorkItemClassComponent', () => {
  let component: UpdateWorkItemClassComponent;
  let fixture: ComponentFixture<UpdateWorkItemClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWorkItemClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorkItemClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
