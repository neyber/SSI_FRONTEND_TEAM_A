import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaCategoryComponent } from './sa-category.component';

describe('SaCategoryComponent', () => {
  let component: SaCategoryComponent;
  let fixture: ComponentFixture<SaCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
