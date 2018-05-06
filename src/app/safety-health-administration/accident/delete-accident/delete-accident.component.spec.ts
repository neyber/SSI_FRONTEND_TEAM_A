import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccidentComponent } from './delete-accident.component';

describe('DeleteAccidentComponent', () => {
  let component: DeleteAccidentComponent;
  let fixture: ComponentFixture<DeleteAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
