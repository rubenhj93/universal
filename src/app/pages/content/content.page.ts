import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  public content:any;

  constructor(private _storage: StorageService, private socialSharing: SocialSharing, private activatedRoute:ActivatedRoute, private domSanitizer:DomSanitizer) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( (params:any) =>{
      this._storage.getNews().then( (data:any) =>{
        console.log(data,'lo que obtiene');
        this.content = data;
      });
    });
    
  }


  /**
   * METODO PARA COMPARTIR EN REDES SOCIALES
   * 
   * @return {void}
   * @author Ruben Hernandez Jimenez
   */

  public shared():void{
    this.socialSharing.share(this.content.title,this.content.author,this.content.thumbnail,this.content.link);
  }

  /**
   * METODO PARA LIMPIAR HTML 
   * 
   * @param {any} html
   * @return {any}
   * @author Ruben Hernandez Jimenez
   */

  public cleanHtml(html:any = ''):any{
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

}
