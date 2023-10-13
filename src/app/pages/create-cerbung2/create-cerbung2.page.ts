import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CerbungserviceService } from '../../cerbungservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-cerbung2',
  templateUrl: './create-cerbung2.page.html',
  styleUrls: ['./create-cerbung2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateCerbung2Page implements OnInit {

  new_title = ""
  new_desc = ""
  goToStep3() {
    this.cerbungservice.setCerbung2(this.new_title, this.new_desc)
    this.router.navigate(['tabs/create-cerbung3'])

  }
  constructor(private cerbungservice: CerbungserviceService, private router: Router) { }

  ngOnInit() {
  }

}
