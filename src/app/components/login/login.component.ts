import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UserapiService } from 'src/app/userdata/userapi.service';
import { Loginres } from 'src/app/models/loginres';

import { CommonService } from 'src/app/commonservices/common.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  
  constructor(private userservice:UserapiService,private cc:CommonService,private route:Router,private router:ActivatedRoute) { }

  userdata=new FormGroup({
  email:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
  })

validemail=true;


  

  login(userdata:FormGroup){

    console.log(this.userdata)
    this.userservice.login(this.userdata.value).subscribe((r:Loginres)=>{

      if(r.validlogin==true){
         
         this.cc.changeuser({email:r.email,token:r.res})

         this.route.navigate([`eren/${r.res}/${r.email}`])
         alert(r.email)
      }
      else{
        alert(r.validlogin)
        alert(r.res);
      }



  })
  }

  ngOnInit() {
  }

}
