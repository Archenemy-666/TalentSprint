import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorporateRegisterComponent } from './corporate-register/corporate-register.component';
import { CorporateLoginComponent } from './corporate-login/corporate-login.component';
import { SmallScaleRegisterComponent } from './small-scale-register/small-scale-register.component';
import { SmallScaleLoginComponent } from './small-scale-login/small-scale-login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SmallScaleHomeComponent } from './small-scale-home/small-scale-home.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { CorporateHomeComponent } from './corporate-home/corporate-home.component';
import { SmallScaleMarketComponent } from './small-scale-market/small-scale-market.component';
import { HomeComponent } from './home/home.component';
import { CorporateMarketComponent } from './corporate-market/corporate-market.component';
import { CorporateCartComponent } from './corporate-cart/corporate-cart.component';
import { SmallScaleCartComponent } from './small-scale-cart/small-scale-cart.component';
import { core } from '@angular/compiler';
import { PaymentComponent } from './payment/payment.component';

const appRoot: Routes=[{path:'',component:HomeComponent},
{path:'corporateRegister',component:CorporateRegisterComponent},
{path:'corporateLogin',component:CorporateLoginComponent},
{path:'smallScaleRegister',component:SmallScaleRegisterComponent},
{path:'smallScaleHome',component:SmallScaleHomeComponent},
{path:'requestForm',component:RequestFormComponent},
{path:'smallScaleLogin',component:SmallScaleLoginComponent},
{path:'smallScaleMarket',component:SmallScaleMarketComponent},
{path:'corporateMarket',component:CorporateMarketComponent},
{path:'corporateCart',component:CorporateCartComponent},
{path:'smallScaleCart',component:SmallScaleCartComponent},
{path:'payment',component:PaymentComponent},
{path:'corporateHome',component:CorporateHomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CorporateRegisterComponent,
    CorporateLoginComponent,
    SmallScaleRegisterComponent,
    SmallScaleLoginComponent,
    HeaderComponent,
    SmallScaleHomeComponent,
    RequestFormComponent,
    CorporateHomeComponent,
    SmallScaleMarketComponent,
    HomeComponent,
    CorporateMarketComponent,
    CorporateCartComponent,
    SmallScaleCartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
