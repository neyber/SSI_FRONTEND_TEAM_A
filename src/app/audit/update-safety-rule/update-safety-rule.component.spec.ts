import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSafetyRuleComponent } from './update-safety-rule.component';

describe('UpdateSafetyRuleComponent', () => {
  let component: UpdateSafetyRuleComponent;
  let fixture: ComponentFixture<UpdateSafetyRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSafetyRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSafetyRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
