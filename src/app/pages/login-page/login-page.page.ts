// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: 'login-page.page.html',
//   styleUrls: ['login-page.page.scss'],
// })
// export class LoginPagePage implements OnInit {
//   username: string = ''; // Initialize with an empty string
//   password: string = ''; // Initialize with an empty string

//   constructor(private router: Router) {}

//   ngOnInit() {
//     // This method is called when the component is initialized.
//   }

//   login() {
//     // Hardcoded username and password
//     const hardcodedUsername = 'yourusername';
//     const hardcodedPassword = 'yourpassword';

//     if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
//       // Successful login, navigate to another page (e.g., the home page)
//       this.router.navigate(['home']);
//     } else {
//       // Handle invalid login
//       console.log('Invalid credentials');
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPagePage implements OnInit {

  username: string = ''; // Initialize with an empty string
  password: string = ''; // Initialize with an empty string
  
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {}
  
  login() {
        if (this.authService.authenticate(this.username, this.password)) {
          // Successful login, navigate to another page (e.g., the home page)
          this.router.navigate(['tabs/home']);
        } else {
          // Handle invalid login
          console.log('Invalid credentials');
      }
    }
}
