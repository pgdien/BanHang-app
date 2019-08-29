import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {HttpClient} from '@angular/common/http';
import { AppComponent } from '../app.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-qldanh-muc',
  templateUrl: './qldanh-muc.component.html',
  styleUrls: ['./qldanh-muc.component.css']
})
export class QLDanhMucComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumnHangHoa: string[] = ['mA_HH', 'teN_HH'];
  displayedColumnLoaiDonhang: string[] = ['teN_LDH'];
  dataSource = ELEMENT_DATA;
  panelOpenState = false;
  constructor(private httpClient: HttpClient) { }

  host='https://banhang-api.herokuapp.com';
  // host='http://localhost:50479';
  themDonHang=false;
  listDonHang = null;
  themHangHoa=false;
  listHangHoa = null;
  themLoaiDonhang=false;
  listLoaiDonHang = null;

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
    this.httpClient.get(this.host + '/api/hanghoa').subscribe((data) => {
      this.listHangHoa = data;
      //console.log(this.listNguoiQL);
    });
    this.httpClient.get(this.host + '/api/loai_donhang').subscribe((data) => {
      this.listLoaiDonHang = data;
      //console.log(this.listNguoiQL);
      // console.log(AppComponent.login);
    });
  }

  
  changeDonHang() {
    if(this.themDonHang)
      this.themDonHang=false;
    else
      this.themDonHang=true;
    // console.log(this.themDonHang);
  }
  changeHangHoa() {
    if(this.themHangHoa)
      this.themHangHoa=false;
    else
      this.themHangHoa=true;
    // console.log(this.themHangHoa);
  }
  changeLoaiDonHang() {
    if(this.themLoaiDonhang)
      this.themLoaiDonhang=false;
    else
      this.themLoaiDonhang=true;
    // console.log(this.themLoaiDonhang);
  }

  addDonHang() {
    
  }
  addHangHoa() {
    
  }
  addLoaiDonHang() {
    
  }
}
