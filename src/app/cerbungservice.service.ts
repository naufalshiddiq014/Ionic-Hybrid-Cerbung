import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {
  private p_title : string = "";
  private p_desc : string = "";
  private p_url : string = "";
  private p_genre : string = "";
  private p_id : number = 0
  cerbung = [
    {
      id:1,
      title: "Dunia Dalam Cermin: Kisah Terbalik yang Misterius",
      // author: "NebulaNomad",
      description: "kisah seru tentang seorang anak yang menemukan cermin ajaib di sebuah toko antik.",
      url: "https://assets.pikiran-rakyat.com/crop/0x98:735x868/x/photo/2021/03/12/1062797006.jpg",
      genre: "Misteri",
      restricted: true,
      firstParagraph: "Dengan hati berdebar, Alex mengelilingi toko antik tua itu, Matanya tertarik pada cermin kuno yang memancarkan keindahan misterius."
    },
    {
      id:2,
      title: "Rahasia Hutan Kuno",
      //author: "NebulaNomad",
      description: "kisah seru tentang seorang anak yang menemukan hutan.",
      url: "https://cdn1-production-images-kly.akamaized.net/lyG-xx7WlT6ExLk7fuMx_8fzd3U=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1600228/original/006734100_1495274118-0__foggy-545838_960_720__Pixabay__werner22brigitten_CC.jpg",
      genre: "Misteri",
      restricted: true,
      firstParagraph: "Dengan hati berdebar, Alex mengelilingi toko antik tua itu, Matanya tertarik pada cermin kuno yang memancarkan keindahan misterius."
    }
  ]

  constructor() { }

  addCerbung(w_title: string, w_desc: string, w_url: string, w_genre: string,w_id:number)
  {
    this.cerbung.push({
      id:w_id,
      title: w_title,
      description: w_desc,
      url: w_url,
      genre: w_genre,
      restricted: true,
      firstParagraph: "kjsdkjlkjadf"
    })
  }
  setCerbung2(test_title:string,test_desc:string){
    this.p_title=test_title;
    this.p_desc=test_desc;
  }
  setCerbung1(test_genre:string,test_url:string){
    this.p_genre=test_genre;
    this.p_url=test_url;
  }
  getTitle():string{
    return this.p_title
  }
  getDesc():string{
    return this.p_desc
  }
  getUrl():string{
    return this.p_url
  }
  getGenre():string{
    return this.p_genre
  }
}
