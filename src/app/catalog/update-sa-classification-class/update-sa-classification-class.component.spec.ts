import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSaClassificationClassComponent } from './update-sa-classification-class.component';

describe('UpdateSaClassificationClassComponent', () => {
  let component: UpdateSaClassificationClassComponent;
  let fixture: ComponentFixture<UpdateSaClassificationClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSaClassificationClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSaClassificationClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
