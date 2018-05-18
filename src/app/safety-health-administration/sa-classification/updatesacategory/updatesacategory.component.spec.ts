import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesacategoryComponent } from './updatesacategory.component';

describe('UpdatesacategoryComponent', () => {
  let component: UpdatesacategoryComponent;
  let fixture: ComponentFixture<UpdatesacategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesacategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesacategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
