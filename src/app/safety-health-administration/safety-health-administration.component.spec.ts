import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyHealthAdministrationComponent } from './safety-health-administration.component';

describe('SafetyHealthAdministrationComponent', () => {
  let component: SafetyHealthAdministrationComponent;
  let fixture: ComponentFixture<SafetyHealthAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyHealthAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyHealthAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
