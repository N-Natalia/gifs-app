import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private giftService: GifsService) {

  }
  get tagsHistory(): string[] {
    return [...this.giftService.tagsHistory];
  }
  searchGifs(tag: string): void {
    this.giftService.searchTag(tag);
  }


}
