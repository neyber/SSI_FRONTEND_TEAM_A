import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePpeClassificationComponent } from './create-ppe-classification.component';

describe('CreatePpeClassificationComponent', () => {
  let component: CreatePpeClassificationComponent;
  let fixture: ComponentFixture<CreatePpeClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePpeClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePpeClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
