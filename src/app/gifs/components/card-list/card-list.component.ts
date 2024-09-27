import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifts-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  // cargar el ultimo git guardado en localstorage
  // constructor() {
  //   this.gifs = JSON.parse(localStorage.getItem('history')!) || [];
  // }



  @Input()
  gifs: Gif[] = [];

}
