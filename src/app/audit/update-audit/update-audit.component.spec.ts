import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAuditComponent } from './update-audit.component';

describe('UpdateAuditComponent', () => {
  let component: UpdateAuditComponent;
  let fixture: ComponentFixture<UpdateAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
