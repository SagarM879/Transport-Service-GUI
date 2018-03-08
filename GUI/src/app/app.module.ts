import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerMyOrdersComponent } from './customer-my-orders/customer-my-orders.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'customer-my-orders',
    component: CustomerMyOrdersComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CustomerMyOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
