import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tt-kkhach-hang',
  templateUrl: './tt-kkhach-hang.component.html',
  styleUrls: ['./tt-kkhach-hang.component.css']
})
export class TtKKhachHangComponent implements OnInit {
  displayedColumns: string[] = ['mA_KH', 'teN_KH', 'sdt', 'ghichu'];
  host='https://banhang-api.herokuapp.com';
  // host='http://localhost:61994';
  constructor(private httpClient: HttpClient) { }
  themKhachHang=false;
  listKhachHang=null;
  ngOnInit() {
    this.httpClient.get(this.host + '/api/khachhang').subscribe((data) => {
      this.listKhachHang = data;
      // console.log(this.listKhachHang);
    });
  }
  changeKhachHang() {
    if(this.themKhachHang)
      this.themKhachHang=false;
    else
      this.themKhachHang=true;
    // console.log(this.themKhachHang);
  }
}
