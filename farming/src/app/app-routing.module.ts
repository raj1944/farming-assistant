import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AnswerComponent} from './answer/answer.component';
import {FarmerComponent} from './farmer/farmer.component';
import {AuthGuard} from './auth.guard';
import  {AuthlrGuard} from './authlr.guard';

import { AdvirsorComponent } from './advirsor/advirsor.component';
import { SellerComponent } from './seller/seller.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { Home1Component } from './home1/home1.component';
import { ShowquestionComponent } from './showquestion/showquestion.component';
import { ShowanswerComponent } from './showanswer/showanswer.component';
import { ProductsComponent } from './products/products.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { SuggetionComponent } from './suggetion/suggetion.component';
import { ShowsuggetionComponent } from './showsuggetion/showsuggetion.component';
import { StaticComponent } from './static/static.component';
import { AdminComponent } from './admin/admin.component';
import { StatesComponent } from './admin/states/states.component';
import { AdminguardGuard } from './adminguard.guard';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'static',
    component: StaticComponent 
  },
  {
    path:'adminlogin',
    component: AdminComponent
  },
  {
    path:'states',
    component: StatesComponent,
    canActivate:[AdminguardGuard]
  },

  {
    path:'profile',
    component: ProfileComponent,
    canActivate:[AdminguardGuard]
  },
   
  {
    path:'answer',
    component: AnswerComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[AuthlrGuard]
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'farmer',
    component: FarmerComponent,
    children: [
      {path: '',component:Home1Component},
      {path:'addquestion' , component:AddquestionComponent},
      {path: 'showanswer' ,component:ShowanswerComponent},
      {path :'addproduct', component:ProductsComponent},
      {path :'showproduct', component:ShowproductsComponent},
      {path :'showsuggetion', component:ShowsuggetionComponent}
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'advisor',
    component: AdvirsorComponent,
    children: [
      {path: '',component:Home1Component},
      {path:'showquestion' , component:ShowquestionComponent},
      {path:'suggetion' , component:SuggetionComponent}
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'seller',
    component: SellerComponent,
    children: [
      {path: '',component:Home1Component},
      {path :'addproduct', component:ProductsComponent},
      {path :'showproduct', component:ShowproductsComponent},
      {path :'removeproduct', component:RemoveproductComponent}
    ],
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
