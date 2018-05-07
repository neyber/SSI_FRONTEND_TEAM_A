import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkItemClassComponent } from './create-work-item-class.component';

describe('CreateWorkItemClassComponent', () => {
  let component: CreateWorkItemClassComponent;
  let fixture: ComponentFixture<CreateWorkItemClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkItemClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkItemClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
