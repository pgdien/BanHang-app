import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppComponent } from '../app.component';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { ModalService } from '../_services';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-qldanh-muc',
  templateUrl: './qldanh-muc.component.html',
  styleUrls: ['./qldanh-muc.component.css']
})
export class QLDanhMucComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumnHangHoa: string[] = ['mA_HH', 'teN_HH', 'hanghoA_ID'];
  // displayedColumnHangHoa: string[] = ['mA_HH', 'teN_HH'];
  displayedColumnLoaiDonhang: string[] = ['teN_LDH'];
  panelOpenState = false;

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar, private modalService: ModalService) { }

  host='https://banhang-api.herokuapp.com';
  // host='http://localhost:50479';
  stt='Thêm';
  idHangHoa=null;
  themHangHoa=false;
  listHangHoa = null;
  themLoaiDonhang=false;
  listLoaiDonHang = null;
  txtTenHH=null;
  kq=null;
  load=false;
  evtSwipe=null;
  
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  actionButtonLabel: string = 'Đóng';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  addExtraClass: boolean = false;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
            
    
    this.loadData();
    
    this.httpClient.get(this.host + '/api/loai_donhang').subscribe((data) => {
      this.listLoaiDonHang = data;
      //console.log(this.listNguoiQL);
      // console.log(AppComponent.login);
    });
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
 
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  loadData(){
    this.load=true;
    // this.listHangHoa=null;
    this.httpClient.get(this.host + '/api/hanghoa').subscribe((data) => {
      this.listHangHoa = data;
      this.load=false;
      console.log(this.listHangHoa);
    });
  }
  createAdd(){
    this.idHangHoa=null;
    this.txtTenHH=null;
    this.stt='Thêm';
  }
  createEdit(id){
    this.stt='Sửa';
    this.idHangHoa=id;
    this.listHangHoa.forEach(childObj=> {
      if(childObj.hanghoA_ID == id){
        this.txtTenHH=childObj.teN_HH;
      }
    })
  }
  createDel(id, ten){
    this.idHangHoa=id;
    this.txtTenHH=ten;
  }
  addHangHoa() {
      this.httpClient.post(this.host + '/api/hanghoa', JSON.parse('{"ma_hh":"'+'1'+'",'+
                                                            '"ten_hh":"'+this.txtTenHH+'"}'),  {responseType: 'text'}).subscribe((data) => {
        // console.log(data);
        this.kq= data;
        this.openSnackBar();
        if(data=='Thành công'){this.loadData();}
    });
  }
  editHangHoa() {
    this.httpClient.put(this.host + '/api/hanghoa/'+this.idHangHoa, JSON.parse('{"hanghoa_id":"'+this.idHangHoa+'",'+
                                                                '"ten_hh":"'+this.txtTenHH+'"}'),  {responseType: 'text'}).subscribe(
    data => {
      // console.log(data);
      this.kq= data;
      this.openSnackBar();
      if(data=='Thành công'){this.loadData();}
    });
  }
  delHangHoa(){
    this.httpClient.delete(this.host + '/api/hanghoa/'+this.idHangHoa,  {responseType: 'text'}).subscribe(
    data => {
      console.log(data);
      this.kq= data;
      this.openSnackBar();
      if(data=='Thành công'){this.loadData();}
    });
  }

  onSwipe(evt, id) {
    const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left'):'';
    const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';

    console.log(`${x} ${y} | ${id}`);
    this.evtSwipe=x;
    this.idHangHoa=id;
  }
  
  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    // config.extraClasses = this.addExtraClass ? ['test'] : undefined;
    this.snackBar.open(this.kq, this.action ? this.actionButtonLabel : undefined, config);
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
}