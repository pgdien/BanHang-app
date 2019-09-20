import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTTKhachHangComponent } from './edit-tt-khach-hang.component';

describe('EditTTKhachHangComponent', () => {
  let component: EditTTKhachHangComponent;
  let fixture: ComponentFixture<EditTTKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTTKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTTKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
