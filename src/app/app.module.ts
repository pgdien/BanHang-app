import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QLDanhMucModule } from './qldanh-muc/qldanh-muc.module';
import { QLDanhMucComponent } from './qldanh-muc/qldanh-muc.component';

const appRoutes: Routes = [
  { path: 'QLDanhMuc', component: QLDanhMucComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QLDanhMucComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QLDanhMucModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
