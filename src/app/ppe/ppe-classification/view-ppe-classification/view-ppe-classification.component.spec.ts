import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPpeClassificationComponent } from './view-ppe-classification.component';

describe('ViewPpeClassificationComponent', () => {
  let component: ViewPpeClassificationComponent;
  let fixture: ComponentFixture<ViewPpeClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPpeClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPpeClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
