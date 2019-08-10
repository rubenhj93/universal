import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public news:any;

  constructor(private storage: Storage) {
    this.news = {};
  }

  /**
   * METODO PARA GUADAR DATA
   * 
   * @param {any} data
   * @return {boolean}
   * @author Ruben Hernandez Jimenez
   */

  saveNews(data:any):boolean{

    this.storage.set('news',data);
    return true;
  }

  /**
   * METODO PARA RECUPRAR DATA DE NOTICIA
   * 
   * @return {any}
   * @author Ruben Hernandez Jimenez
   */

  async getNews(){
    const news  = await this.storage.get('news');
    this.news   = news || {};
    return this.news;
  }

}
