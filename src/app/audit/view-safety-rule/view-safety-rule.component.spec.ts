import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSafetyRuleComponent } from './view-safety-rule.component';

describe('ViewSafetyRuleComponent', () => {
  let component: ViewSafetyRuleComponent;
  let fixture: ComponentFixture<ViewSafetyRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSafetyRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSafetyRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
