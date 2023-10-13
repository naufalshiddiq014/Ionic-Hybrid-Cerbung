import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CerbungserviceService } from '../../cerbungservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cerbung',
  templateUrl: './create-cerbung.page.html',
  styleUrls: ['./create-cerbung.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class CreateCerbungPage implements OnInit {

  // new_title = ""
  // new_desc = ""
  new_url = ""
  new_genre = ""
  arr_genre:string[] = []
  new_restrict = false
  new_firstPar = ""


  alertButtons = ['OK']

  constructor(private cerbungservice: CerbungserviceService, private router: Router) { }

  ngOnInit() {
    this.arr_genre = ["Misteri", "Horror", "Action", "Comedy"]
  }
  goToStep2(){
    this.cerbungservice.setCerbung1(this.new_genre,this.new_url)
    this.router.navigate(['tabs/create-cerbung2'])

  }

  // submitcerbung(){
  //   this.cerbungservice.addCerbung(this.new_title, this.new_desc, this.new_url, this.new_genre, this.new_restrict, this.new_firstPar)
  // }

  // goToStep(step: number) {
  //   if (step === 1) {
  //     // Navigate to Step 1
  //     this.router.navigate(['/step1']); // Replace 'step1' with the actual route for Step 1
  //   }
  //   if (step === 2) {
  //     // Navigate to Step 2
  //     this.router.navigate(['/step2']); // Replace 'step2' with the actual route for Step 2
  //   }
  //   if (step === 3) {
  //     // Navigate to Step 3
  //     this.router.navigate(['/step3']); // Replace 'step3' with the actual route for Step 3
  //   }
  // }
}
