import { Injectable } from '@angular/core';
import { QueryBuilderService } from '../query-builder/query-builder.service';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private APIS_HOME:any

  constructor( private _queryBuilderService: QueryBuilderService ) { 

    /*
    |-----------------------------------------------------------
    | PATH DE APIS HOME
    |-----------------------------------------------------------
    */
   
    this.APIS_HOME  = {
      getHome  : environment.apiUrl + 'notes/eluniversal/mxm/json/minutebyminute',
    };

  }

  /**
   * METODO PARA OBTENER HOME 
   *
   * @return {any} data
   * @author Ruben Hernandez Jimenez
   */

  public getHome(): any {

    return this._queryBuilderService.connect<any>(this.APIS_HOME.getHome, 'get')
      .pipe(
        map(data => {
          return data;
      })
    );
    
  }

}
