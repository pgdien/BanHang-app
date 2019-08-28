import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QLDanhMucComponent } from './qldanh-muc.component';

describe('QLDanhMucComponent', () => {
  let component: QLDanhMucComponent;
  let fixture: ComponentFixture<QLDanhMucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QLDanhMucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QLDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
