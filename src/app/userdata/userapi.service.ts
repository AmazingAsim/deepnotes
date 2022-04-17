import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Loginres } from '../models/loginres';
import { Signin } from '../models/signin';


@Injectable({
  providedIn: 'root'
})
export class UserapiService {

constructor(private http:HttpClient) { }
basicurl="https://deepnotesusers.herokuapp.com/api"
localapi='http://localhost:4040/api'
login(user:any):any{
 return this.http.post(this.basicurl+'/login',JSON.stringify(user),{headers:{'content-type':"application/json"}});
}

currentuserinfo(email:string,token:string){
  
return this.http.get(this.basicurl+'/currentuser/'+email,{headers:{
  'Authorization':token
}})

}

singin(user:any):any{
  return this.http.post(this.localapi+'/adduser',user,{headers:{'content-type':"application/json"}});
}

}
