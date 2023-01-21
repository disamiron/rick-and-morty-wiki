import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/app/shared/interfaces';
import { RickAndMortyService } from 'src/app/shared/services/rick-and-morty/rick-and-morty.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSnackBar } from '@angular/material/snack-bar';

@UntilDestroy()
@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss'],
})
export class CharacterPageComponent implements OnInit {
  private _characterId: string | null =
    this._activatedRoute.snapshot.paramMap.get('characterId');

  public isLoading: boolean = true;

  public character: ICharacter | undefined;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _rickandmortyService: RickAndMortyService
  ) {}

  public ngOnInit(): void {
    this._getCharacter();
  }

  private _getCharacter() {
    if (this._characterId && !isNaN(+this._characterId)) {
      this._rickandmortyService
        .getCharacterById(+this._characterId)
        .pipe(untilDestroyed(this))
        .subscribe(
          (v) => {
            this.character = v;
            this.isLoading = false;
          },
          (e) => {
            this.isLoading = false;
          }
        );
    } else {
      this._snackBar.open('This is incorrect character ID', 'Close', {
        duration: 3000,
      });
      this.isLoading = false;
    }
  }
}
