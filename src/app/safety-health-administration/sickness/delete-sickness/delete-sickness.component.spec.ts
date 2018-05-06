import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSicknessComponent } from './delete-sickness.component';

describe('DeleteSicknessComponent', () => {
  let component: DeleteSicknessComponent;
  let fixture: ComponentFixture<DeleteSicknessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSicknessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSicknessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
