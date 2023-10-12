import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create-cerbung',
  templateUrl: './create-cerbung.page.html',
  styleUrls: ['./create-cerbung.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateCerbungPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
