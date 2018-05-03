import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSaClassificationClassComponent } from './view-sa-classification-class.component';

describe('ViewSaClassificationClassComponent', () => {
  let component: ViewSaClassificationClassComponent;
  let fixture: ComponentFixture<ViewSaClassificationClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSaClassificationClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSaClassificationClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
