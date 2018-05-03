import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAuditComponent } from './delete-audit.component';

describe('DeleteAuditComponent', () => {
  let component: DeleteAuditComponent;
  let fixture: ComponentFixture<DeleteAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
