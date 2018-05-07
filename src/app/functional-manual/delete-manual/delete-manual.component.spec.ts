import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteManualComponent } from './delete-manual.component';

describe('DeleteManualComponent', () => {
  let component: DeleteManualComponent;
  let fixture: ComponentFixture<DeleteManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
