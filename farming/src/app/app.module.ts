import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AnswerComponent } from './answer/answer.component';
import { AuthService } from './auth.service';

import { AuthGuard } from './auth.guard';
import {AuthlrGuard} from './authlr.guard';

import { FarmerComponent } from './farmer/farmer.component';
import { SellerComponent } from './seller/seller.component';
import { AdvirsorComponent } from './advirsor/advirsor.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { Home1Component } from './home1/home1.component';
import { ShowquestionComponent } from './showquestion/showquestion.component';
import { ShowanswerComponent } from './showanswer/showanswer.component';
import { ProductsComponent } from './products/products.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { FooterComponent } from './footer/footer.component';
import { SuggetionComponent } from './suggetion/suggetion.component';
import { ShowsuggetionComponent } from './showsuggetion/showsuggetion.component';
import { StaticComponent } from './static/static.component';
import { AdminComponent } from './admin/admin.component';
import { StatesComponent } from './admin/states/states.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AnswerComponent,
    FarmerComponent,
    SellerComponent,
    AdvirsorComponent,
    AddquestionComponent,
    Home1Component,
    ShowquestionComponent,
    ShowanswerComponent,
    ProductsComponent,
    ShowproductsComponent,
    RemoveproductComponent,
    FooterComponent,
    SuggetionComponent,
    ShowsuggetionComponent,
    StaticComponent,
    AdminComponent,
    StatesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuard,AuthlrGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
