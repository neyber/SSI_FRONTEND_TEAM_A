import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProtectionComponent } from './personal-protection.component';

describe('PersonalProtectionComponent', () => {
  let component: PersonalProtectionComponent;
  let fixture: ComponentFixture<PersonalProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalProtectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
