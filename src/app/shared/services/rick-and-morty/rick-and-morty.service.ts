import { Injectable } from '@angular/core';
import { ICharacter, ICharacterArray, IFilter } from '../../interfaces';
import { BaseHttpService } from '../base-http/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private readonly _charactersHref = '/character';

  constructor(private _http: BaseHttpService) {}

  public getCharacters(filters?: IFilter) {
    return this._http.getData<ICharacterArray>(this._charactersHref, filters);
  }

  public getCharacterById(id: number) {
    return this._http.getData<ICharacter>(`${this._charactersHref}/${id}`);
  }
}
