import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSicknessComponent } from './update-sickness.component';

describe('UpdateSicknessComponent', () => {
  let component: UpdateSicknessComponent;
  let fixture: ComponentFixture<UpdateSicknessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSicknessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSicknessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
