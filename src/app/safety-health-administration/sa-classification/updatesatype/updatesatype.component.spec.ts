import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesatypeComponent } from './updatesatype.component';

describe('UpdatesatypeComponent', () => {
  let component: UpdatesatypeComponent;
  let fixture: ComponentFixture<UpdatesatypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesatypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
