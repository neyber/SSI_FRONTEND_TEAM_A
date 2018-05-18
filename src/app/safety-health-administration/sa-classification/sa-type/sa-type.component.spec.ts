import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaTypeComponent } from './sa-type.component';

describe('SaTypeComponent', () => {
  let component: SaTypeComponent;
  let fixture: ComponentFixture<SaTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
