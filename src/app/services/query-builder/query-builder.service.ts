import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryBuilderService {

  constructor(private httpClient: HttpClient) { 

  }

  /**
   * METODO GENERAL PARA GENERAR QUERYS
   *
   * @param {string} query (path de api)
   * @param {string} type  (tipo de verbo)
   * @param {any} data  (variables por post)
   * @return {any}
   * @author Ruben Hernandez Jimenez
   *
   */

  public connect<T>(query: string, type: string, data:any): any {

    /*
    |-------------------------------------------------------
    | CREAMOS CONSTANTE HEADERS
    |-------------------------------------------------------
    */

    let http: any;
    let headerBody:any;
    headerBody      = (type === 'post')?{'Content-Type': 'application/json'}:{};
    const headers:any   = new HttpHeaders(headerBody);

    /*
    |-------------------------------------------------------
    | VERIFICAMOS QUE TIPO DE VERBO (METODO) ES REQUERIDO
    |-------------------------------------------------------
    */    

    if (type === 'get') { // query por verbo GET
      http = this.httpClient.get<T>(query);
    } else if (type === 'post') { // query por verbo POST
      http = this.httpClient.post<T>(query, data, { headers: headers });
    }

    return http;

  }
}
