import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccidentComponent } from './view-accident.component';

describe('ViewAccidentComponent', () => {
  let component: ViewAccidentComponent;
  let fixture: ComponentFixture<ViewAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
