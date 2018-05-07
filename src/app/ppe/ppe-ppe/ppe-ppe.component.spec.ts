import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpePpeComponent } from './ppe-ppe.component';

describe('PpePpeComponent', () => {
  let component: PpePpeComponent;
  let fixture: ComponentFixture<PpePpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpePpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpePpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
