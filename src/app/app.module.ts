import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './commonservices/common.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserapiService } from './userdata/userapi.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstyearComponent } from './components/firstyear/firstyear.component';
import { SecondyearComponent } from './components/secondyear/secondyear.component';
import { ThirdyearComponent } from './components/thirdyear/thirdyear.component';
import { LastyearComponent } from './components/lastyear/lastyear.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    FirstyearComponent,
    SecondyearComponent,
    ThirdyearComponent,
    LastyearComponent,
    FooterComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [UserapiService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
