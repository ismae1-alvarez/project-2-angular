import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory:string[] =  [];

  private apiKey:string = 'x312b5G4d6BNUxTSoUnOvZ405OJ0cKp0';


  constructor() { }

  get tagsHistotory(){
    return [...this._tagsHistory];
  }


  private organizeHistory(tag:string){
    tag= tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((repet) => repet !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory =  this._tagsHistory.splice(0, 10);
  }

  searchTag(tag:string):void{
    if(tag.length === 0) return;

    this.organizeHistory(tag);

  }
}
