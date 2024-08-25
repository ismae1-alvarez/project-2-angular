import { Component, Input } from '@angular/core';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html'
})

export class ListBoxComponent  {
  constructor() { }
  @Input()
  public gifs: Gif[]=[];

}
