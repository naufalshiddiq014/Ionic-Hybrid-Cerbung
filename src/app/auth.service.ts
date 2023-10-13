import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private p_id : number=0;
  private p_username : string="";
  private p_password : string="";
  private p_url : string="";
  users = [
    {
      id:1,
      username: 'user1',
      password: 'pass1',
      url: 'https://www.parenting.co.id/img/images/LELA28_shutterstock_800x400.jpg',
    },
    {
      id:2,
      username: 'user2',
      password: 'pass2',
      url: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1613385371/attached_image/ini-tanda-dan-cara-untuk-berhenti-menjadi-people-pleaser.jpg',
    },
  ];

  authenticate(username: string, password: string): boolean {
    // Check if the provided username and password match any user's credentials
    const user = this.users.find((u) => u.username === username && u.password === password);
    
    return !!user; // Return true if a match is found, otherwise false
  } 

  constructor() { }

  addUsers(u_id:number, u_username: string, u_password: string, u_url:string){
    this.users.push({
      id : u_id,
      username : u_username,
      password: u_password,
      url: u_url
    })
  }
  // setUser(s_id:number, s_username:string, s_password:string, s_url:string){
  //   this.p_id=s_id,
  //   this.p_username=s_username,
  //   this.p_password=s_password,
  //   this.p_url=s_url
  // }
  // getUser(){
  //   return this.p_username
  // }
}
