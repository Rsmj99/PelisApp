import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root' //Es una forma de importar servicios, con esto ya no hay necesidad de importar el servicio y ponerlo en el providers de app.module
})
export class PeliculasService {

  private apikey:string = "aefa8823fbc4ba825f12ec12ceb7918a";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  
  peliculas:any[] = [];

  constructor( private _http:HttpClient ) { }

  // &language=es&jsonpCallbackFunction: 'jsonCallback'
  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    let desdemes = (desde.getMonth()<9 ? '0'+(desde.getMonth()+1) : desde.getMonth()+1);//Se pone menor que 9 porque solo en caso de los meses, javascript empieza a contar desde 0
    let hastames = (hasta.getMonth()<9 ? '0'+(hasta.getMonth()+1) : hasta.getMonth()+1);
    let desdedia = (desde.getDate()<10 ? '0'+desde.getDate() : desde.getDate());
    let hastadia = (hasta.getDate()<10 ? '0'+hasta.getDate() : hasta.getDate());
    let desdeStr = `${ desde.getFullYear() }-${ desdemes }-${ desdedia }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hastames }-${ hastadia }`;
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es`;

    return this._http.jsonp( url, 'callback' ).pipe(
                map( res=> res['results']));
  }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this._http.jsonp( url, 'callback' )
                .pipe(map( res=> res['results']));
  }
  getPopularesNinos(){

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this._http.jsonp( url, 'callback' )
                .pipe(map( res=> res['results']));
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this._http.jsonp( url, 'callback' ).pipe(
                map( res=> {
                  this.peliculas = res['results'];
                  console.log(this.peliculas);
                  return res['results'];
                }
    ));
  }

  getPelicula(id:string){

    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`;

    return this._http.jsonp( url, 'callback' )
                .pipe(map( res=> res));
  }
}
