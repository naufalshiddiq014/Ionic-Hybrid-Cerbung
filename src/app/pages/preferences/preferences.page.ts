import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PreferencesPage implements OnInit {

  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  darkTheme: boolean = false;
  notifications: boolean = true;

  constructor(private router: Router) {}

  updatePreferences() {
    // Implement logic to update user preferences here
    if (this.newPassword !== this.confirmNewPassword) {
      console.log('New password and confirm password do not match.');
    } else {
      console.log('Preferences updated successfully.');
    }
    if (this.darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  logout() {
    // Implement logout logic here (e.g., clear user session)
    this.router.navigate(['login']); // Redirect to the login page after logout
  }

  ngOnInit() {
  }

}
