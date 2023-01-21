import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHttpService } from './services/base-http/base-http.service';
import { RickAndMortyService } from './services/rick-and-morty/rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { CharacterListCardComponent } from './components/character-list-card/character-list-card.component';
import { MaterialModule } from './material/material.module';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { GenderLogoPipe } from './pipes/gender-logo/gender-logo.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EpisodesPipe } from './pipes/episodes/episodes.pipe';

@NgModule({
  declarations: [
    CharacterListCardComponent,
    CharacterCardComponent,
    GenderLogoPipe,
    EpisodesPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    InfiniteScrollModule,
  ],
  exports: [
    CharacterListCardComponent,
    CharacterCardComponent,
    MaterialModule,
    InfiniteScrollModule,
  ],
  providers: [BaseHttpService, RickAndMortyService],
})
export class SharedModule {}
