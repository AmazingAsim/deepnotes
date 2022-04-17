import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/commonservices/common.service';
import { UserapiService } from 'src/app/userdata/userapi.service';

import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
usermail:string=''
token:string=''
userinfo:any;
  constructor(private cc:CommonService,private userapi:UserapiService,private router:Router,private activeroute:ActivatedRoute) { 

  }

  ngOnInit() {
    
      // this.cc.currentuser.subscribe(r=>{
      //   this.usermail=r.email;
      //   this.token=r.token;

      // })

    this.usermail=  this.activeroute.snapshot.params['email'];
    this.token=this.activeroute.snapshot.params['token']

    this.userapi.currentuserinfo(this.usermail,this.token).subscribe(r=>{
        
      this.userinfo=r;
    
    })
    

    
  }

  
  

}
