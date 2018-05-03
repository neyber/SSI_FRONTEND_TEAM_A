import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePpeClassificationComponent } from './delete-ppe-classification.component';

describe('DeletePpeClassificationComponent', () => {
  let component: DeletePpeClassificationComponent;
  let fixture: ComponentFixture<DeletePpeClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePpeClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePpeClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
