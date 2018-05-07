import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpeClassificationComponent } from './ppe-classification.component';

describe('PpeClassificationComponent', () => {
  let component: PpeClassificationComponent;
  let fixture: ComponentFixture<PpeClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpeClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpeClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
