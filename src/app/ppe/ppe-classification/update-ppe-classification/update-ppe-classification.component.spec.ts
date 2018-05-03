import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePpeClassificationComponent } from './update-ppe-classification.component';

describe('UpdatePpeClassificationComponent', () => {
  let component: UpdatePpeClassificationComponent;
  let fixture: ComponentFixture<UpdatePpeClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePpeClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePpeClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
