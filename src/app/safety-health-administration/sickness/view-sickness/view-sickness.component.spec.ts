import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSicknessComponent } from './view-sickness.component';

describe('ViewSicknessComponent', () => {
  let component: ViewSicknessComponent;
  let fixture: ComponentFixture<ViewSicknessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSicknessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSicknessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
