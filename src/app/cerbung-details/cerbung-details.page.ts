import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cerbung-details',
  templateUrl: './cerbung-details.page.html',
  styleUrls: ['./cerbung-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CerbungDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
