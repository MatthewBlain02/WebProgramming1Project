import { Component } from '@angular/core';
import { Marvelresponce } from './marvelresponce';
import { MarvelApiService } from './services/marvel-api.service.spec';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarvelAPI';
  characterData:Marvelresponce | undefined;
  errorMessage:any;

  constructor(private _marvelService:MarvelApiService) { }

  getCharacterDetails(characterName:string):boolean{
    this._marvelService.getCharacterData(characterName).subscribe(
      (      characterData: Marvelresponce | undefined) =>{
         this.characterData = characterData;
         console.log("Character Name: " + this.characterData?.Name)
      }
    )
    return false;
  }
}
