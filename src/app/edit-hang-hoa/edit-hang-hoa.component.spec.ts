import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHangHoaComponent } from './edit-hang-hoa.component';

describe('EditHangHoaComponent', () => {
  let component: EditHangHoaComponent;
  let fixture: ComponentFixture<EditHangHoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHangHoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHangHoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
