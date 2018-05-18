import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesatypeComponent } from './createsatype.component';

describe('CreatesatypeComponent', () => {
  let component: CreatesatypeComponent;
  let fixture: ComponentFixture<CreatesatypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesatypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
