import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSafetyRuleComponent } from './create-safety-rule.component';

describe('CreateSafetyRuleComponent', () => {
  let component: CreateSafetyRuleComponent;
  let fixture: ComponentFixture<CreateSafetyRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSafetyRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSafetyRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
