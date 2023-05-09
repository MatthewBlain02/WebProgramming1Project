import { Injectable} from "@angular/core";
import { Md5 } from "ts-md5";
import{HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs";
import { Marvelresponce } from "../marvelresponce";

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService{
  private _siteUrl="http://gateway.marvel.com/v1/public/comics"
  private date = new Date();
  private _ts = "?ts="+this.date.toDateString();
  private _key ="&apikey=99fe985f27f022ece1fbe9ce6aa831a8"
  private _hash = "&hash="+Md5.hashStr(this._ts+"085aac4fb2f0db5d57e022077c1ba175e92c4d3f"+this._key)

  constructor(private _http:HttpClient){}
  
  getCharacterData(Name:string):Observable<Marvelresponce>{
    return this._http.get<Marvelresponce>(this._siteUrl+this._ts+this._key+this._hash)
      .pipe(
        tap(data => console.log('Characterdata/error' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  private handleError(err:HttpErrorResponse){
    console.log('MarvelApiService:' + err.message);
    return throwError(() => new Error("MarvelApiService:" + err.message))
  }


}


