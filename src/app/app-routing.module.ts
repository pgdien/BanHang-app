import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DMHangHoaComponent } from './DanhMucHangHoa/dmHangHoa.component';


const routes: Routes = [{
  // path:'dmhanghoa', component: DMHangHoaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
