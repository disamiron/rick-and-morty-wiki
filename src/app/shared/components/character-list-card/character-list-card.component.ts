import { Component, Input } from '@angular/core';
import { ICharacter } from '../../interfaces';

@Component({
  selector: 'app-character-list-card',
  templateUrl: './character-list-card.component.html',
  styleUrls: ['./character-list-card.component.scss'],
})
export class CharacterListCardComponent {
  @Input() character: ICharacter | undefined;
}
