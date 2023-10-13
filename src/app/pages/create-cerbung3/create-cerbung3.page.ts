import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CerbungserviceService } from '../../cerbungservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-cerbung3',
  templateUrl: './create-cerbung3.page.html',
  styleUrls: ['./create-cerbung3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateCerbung3Page implements OnInit {
  title: string="";
  desc: string="";
  url: string="";
  genre: string="";
  id:number=0;
  cerbung: any[] = []

  constructor(private cerbungservice: CerbungserviceService, private router: Router) { }

  ngOnInit() {
    this.title=this.cerbungservice.getTitle()
    this.desc=this.cerbungservice.getDesc()
    this.url=this.cerbungservice.getUrl()
    this.genre=this.cerbungservice.getGenre()
    this.cerbung = this.cerbungservice.cerbung
  }
  publish(){
    this.id=this.cerbung.length+1
    this.cerbungservice.addCerbung(this.title,this.desc,this.url,this.genre,this.id)
    this.router.navigate(['/tabs/tabs.routes'])
  }
}
