import { Component } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifts-home-page',
  templateUrl: './home-page.component.html'
})

export class HomePageComponent {

  constructor(private gitService: GifsService) {}

  get gifs():Gif[]{
    return this.gitService.gitList;
  }


}
