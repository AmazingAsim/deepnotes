import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FirstyearComponent } from './components/firstyear/firstyear.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LastyearComponent } from './components/lastyear/lastyear.component';
import { LoginComponent } from './components/login/login.component';
import { SecondyearComponent } from './components/secondyear/secondyear.component';
import { SignupComponent } from './components/signup/signup.component';
import { ThirdyearComponent } from './components/thirdyear/thirdyear.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'eren/:token/:email',component:DashboardComponent},
  {path:'footer',component:FooterComponent},
  {path:'first',component:FirstyearComponent},
  {path:'second',component:SecondyearComponent},
  {path:'third',component:ThirdyearComponent},
  {path:'last',component:LastyearComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
