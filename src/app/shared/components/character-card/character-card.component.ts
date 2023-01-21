import { Component, Input } from '@angular/core';
import { noAvatarCharacterSrc } from '../../constants';
import { ICharacter } from '../../interfaces';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() character: ICharacter | undefined;

  readonly noAvatarCharacterSrc = noAvatarCharacterSrc;
}
