import { Component } from '@angular/core';
import { HomeService } from '../services/home/home.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public dataHome:any;

  constructor( private _homeService:HomeService ) {

    this.dataHome = [];

    /*
    |-----------------------------------
    | OBTENEMOS DATOS PARA ARRAY dataHome
    |-----------------------------------
    */

    this.getHome();

  }

  /**
   * METODO PARA OBETENER LISTA DE PUBLICACIONES DEL HOME
   * 
   * @return {void}
   * @author Ruben Hernandez Jimenez
   */


  public getHome():void{

    this._homeService.getHome().
      subscribe( (data:any) =>{
        this.dataHome = data;
    })

  }

}
