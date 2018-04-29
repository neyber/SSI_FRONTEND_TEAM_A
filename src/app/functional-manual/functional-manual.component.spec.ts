import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalManualComponent } from './functional-manual.component';

describe('FunctionalManualComponent', () => {
  let component: FunctionalManualComponent;
  let fixture: ComponentFixture<FunctionalManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
