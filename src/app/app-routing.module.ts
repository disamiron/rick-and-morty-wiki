import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './modules/pages/character-page/character-page.component';
import { CharactersListComponent } from './modules/pages/characters-list/characters-list.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent,
  },
  {
    path: ':characterId',
    component: CharacterPageComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
