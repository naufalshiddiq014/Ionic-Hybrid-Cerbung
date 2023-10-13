import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.page.html',
  styleUrls: ['./signup-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SignupPagePage implements OnInit {

  id: number=0;
  username: string = '';
  url: string = '';
  password: string = '';
  confirmPassword: string = '';
  users:any[]=[]

  constructor(private signupservice: AuthService, private router: Router) {}

  signup() {
    if (this.password === this.confirmPassword) {
      // Passwords match, proceed with signup
      console.log('Signup successful');
      this.signupservice.addUsers(this.id,this.username,this.password,this.url)
      this.router.navigate(['']); // Redirect to the Sign In page after signup
    } else {
      // Handle password mismatch
      console.log('Password and Confirm Password do not match');
    }
  }

  ngOnInit() {
  }

}
