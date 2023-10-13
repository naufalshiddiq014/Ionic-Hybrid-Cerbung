import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CerbungserviceService } from 'src/app/cerbungservice.service';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  cerbung:any[]=[]
  // users:any[]=[]

  constructor(private cerbungservice: CerbungserviceService, private authservice : AuthService) {}
  ngOnInit() {
    this.cerbung = this.cerbungservice.cerbung
    // this.users = this.authservice.users
  }

}
