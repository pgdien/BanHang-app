import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ql-ban-hang',
  templateUrl: './ql-ban-hang.component.html',
  styleUrls: ['./ql-ban-hang.component.css']
})
export class QlBanHangComponent implements OnInit {
  host='https://banhang-api.herokuapp.com';
  // host='http://localhost:50479';
  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) { }
  
  themDonHang=false;
  listDonHang = null;
  kq=null;

  ngOnInit() {
    this.httpClient.get(this.host + '/api/donhang').subscribe((data) => {
      this.listDonHang = data;
      this.listDonHang.forEach(childObj=> {
        this.httpClient.get(this.host + '/api/khachhang/'+childObj.khachhanG_ID).subscribe((data1) => {
          childObj.khachhang = data1;
        });
        this.httpClient.get(this.host + '/api/loai_donhang/'+childObj.loaidH_ID).subscribe((data2) => {
          childObj.loaiDH = data2;
        });
     })
      console.log(this.listDonHang);
    });
  }

  addDonHang() {
  
  }
  delHangHoa(id) {
    this.httpClient.delete(this.host + '/api/hanghoa/'+id).subscribe(
    res => {
      console.log(res);
      this.kq= res;
    });
  // this.openSnackBar();
  }
  changeDonHang() {
    if(this.themDonHang)
      this.themDonHang=false;
    else
      this.themDonHang=true;
    // console.log(this.themDonHang);
  }
}
