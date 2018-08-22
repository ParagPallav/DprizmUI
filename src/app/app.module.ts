import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SheetJSComponent } from "./sheetjs.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SweetAlert2Module } from "@toverux/ngx-sweetalert2";
import { ToasterService } from "./toaster.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import { MDBBootstrapModule } from "angular-bootstrap-md";
// import { ChartsModule } from "ng2-charts";
import { ChartsModule } from "ng2-charts/ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SheetJSComponent,
    HomeComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: "toast-bottom-right" }),
    ChartsModule
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
