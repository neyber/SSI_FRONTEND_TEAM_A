import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSicknessComponent } from './create-sickness.component';

describe('CreateSicknessComponent', () => {
  let component: CreateSicknessComponent;
  let fixture: ComponentFixture<CreateSicknessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSicknessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSicknessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
