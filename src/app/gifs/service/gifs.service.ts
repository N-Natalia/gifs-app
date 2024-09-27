import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'// para poder alcanzar a todos los componentes
})                  // sin necesidad de importar el servicio; caso contrario se debe proveer en el modulo
export class GifsService {
  public gitList: Gif[] = [];

  private _tagsHistory : string[] = [];
  private GIPHY_API_KEY = '7AHFF6z8elTYptTq4aXUHlKjqfdBor66';
  private serviceUrl = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();

  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }
  private organizedHistory(tag: string):void {
    tag = tag.trim().toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);// añadir al inicio
    this._tagsHistory.splice(10);// solo 10 elementos en el historial

    // Save in LocalStorage the history
    this.saveLocalStorage();

  }

  private saveLocalStorage():void {
    // Json.stringify() para convertir a string; localsotrage solo almacena strings
    localStorage.setItem('history',JSON.stringify(this._tagsHistory));
  }
  private loadLocalStorage():void {
    if(!localStorage.getItem('history')) return;
    // Load in LocalStorage the history
    // Json.parse() para convertir a objeto
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    //Buscar el primer elemento del historial y
    // mostrarlo en la pantalla principal
    if(this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);

  }

  searchTag(tag: string):void {
    if(tag.trim().length === 0) return;
    this.organizedHistory(tag);

    // Http Params
    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('q', tag)
      .set('limit', '10');

    this.http.get(`${this.serviceUrl}/search`, { params })
      .subscribe((response: any) => {
        this.gitList = response.data;
      })
  }
}
