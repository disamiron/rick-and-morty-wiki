import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/shared/interfaces';
import { RickAndMortyService } from 'src/app/shared/services/rick-and-morty/rick-and-morty.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  public characters: ICharacter[] = [];

  private _page: number = 1;

  public isLoading: boolean = false;

  private _allCharactersIsFetched: boolean = false;

  constructor(private _rickandmortyService: RickAndMortyService) {}

  public ngOnInit(): void {
    this._getCharacters();
  }

  private _getCharacters() {
    this.isLoading = true;
    this._rickandmortyService
      .getCharacters({ page: this._page })
      .pipe(untilDestroyed(this))
      .subscribe((v) => {
        this._allCharactersIsFetched = !v.info.next;
        this.characters = [...this.characters, ...v.results];

        this.isLoading = false;
      });
  }

  public onScroll(): void {
    if (!this.isLoading && !this._allCharactersIsFetched) {
      this._page += 1;
      this._getCharacters();
    }
  }
}
