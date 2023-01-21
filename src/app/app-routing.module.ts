import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './modules/pages/character-page/character-page.component';
import { CharactersListComponent } from './modules/pages/characters-list/characters-list.component';
import { routeUrls } from './shared/constants';

const routes: Routes = [
  {
    path: routeUrls.characters,
    component: CharactersListComponent,
  },
  {
    path: `${routeUrls.characters}/:characterId`,
    component: CharacterPageComponent,
  },
  { path: '**', redirectTo: routeUrls.characters, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
