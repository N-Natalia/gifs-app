import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <style>
      /* Aplica estilos al placeholder directamente desde el HTML */
      .bg-dark::placeholder {
        color: white;
        opacity: 1;
      }
    </style>
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control bg-dark p-3 text-white"
      placeholder="Buscar gifs ..."
      (keyup.enter)="searchTag()"
      #txtTagInput

    >
  `
})
// Sin view child
// <!-- (keyup.enter)="searchTag(txtTagInput.value)"
//       #txtTagInput -->
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
