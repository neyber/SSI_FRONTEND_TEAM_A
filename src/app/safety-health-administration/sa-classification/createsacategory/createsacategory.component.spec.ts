import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesacategoryComponent } from './createsacategory.component';

describe('CreatesacategoryComponent', () => {
  let component: CreatesacategoryComponent;
  let fixture: ComponentFixture<CreatesacategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesacategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesacategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
