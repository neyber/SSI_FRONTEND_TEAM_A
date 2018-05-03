import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSaClassificationClassComponent } from './delete-sa-classification-class.component';

describe('DeleteSaClassificationClassComponent', () => {
  let component: DeleteSaClassificationClassComponent;
  let fixture: ComponentFixture<DeleteSaClassificationClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSaClassificationClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSaClassificationClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
