import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

constructor() { }

useremail:string=''
token=''

emailsrc=new BehaviorSubject({email:this.useremail,token:this.token})
currentuser=this.emailsrc.asObservable();


changeuser(userinfo:any){
  this.emailsrc.next(userinfo)
 
}
}
