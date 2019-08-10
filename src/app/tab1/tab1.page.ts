import { Component } from '@angular/core';
import { HomeService } from '../services/home/home.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public dataHome:any;

  constructor( private _homeService:HomeService, private router:Router, private _storageService:StorageService ) {

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

  /**
   * METODO PARA GUARDAR DATOS EN LOCAL Y REDIRIJIR A CONTENIDO
   * 
   * @param {any} data 
   * @author Ruben Hernandez Jimenez
   */

  public goTo(data:any):void{

    console.log(data,'lo que va a guardar');
    if(this._storageService.saveNews(data)){
      this.router.navigate(['/tabs/tab1/tab1-contenido',data.id]);
    }
  }

}
