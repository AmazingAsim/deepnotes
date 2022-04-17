import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserapiService } from 'src/app/userdata/userapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userdata=new FormGroup({
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    usertype:new FormControl('user',Validators.required)
  })

  crosscheckerror:boolean=true;
  message='error'

  
  constructor(private http:UserapiService,private route:Router) { }

signup(){
  try{
   
    let data=JSON.stringify(this.userdata.value)
    console.log(data)
    
    this.http.singin(data).subscribe((r:any)=>{
      alert(r.res)

      this.route.navigate(['login']);
    
    
    })
  }
  catch(err){
    console.log(err)
   alert(err)
  }
}





  ngOnInit() {

    let confirminput=document.querySelector('input#confirm') as HTMLElement
    let message=document.querySelector('small#message') as HTMLElement

    confirminput?.addEventListener('input',(r)=>{
        if (this.userdata.value.password!=(r.target as HTMLInputElement) .value){
          message.textContent="password didnt match"
          this.crosscheckerror=true;
          this.message='error'
         

        }
        else{
          message.textContent="password matched"
          this.crosscheckerror=false
          this.message='success'
        }
    })
  }

}
