import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaClassificationComponent } from './sa-classification.component';

describe('SaClassificationComponent', () => {
  let component: SaClassificationComponent;
  let fixture: ComponentFixture<SaClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
