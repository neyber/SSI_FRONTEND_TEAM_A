import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSaClassificationClassComponent } from './create-sa-classification-class.component';

describe('CreateSaClassificationClassComponent', () => {
  let component: CreateSaClassificationClassComponent;
  let fixture: ComponentFixture<CreateSaClassificationClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSaClassificationClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSaClassificationClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
