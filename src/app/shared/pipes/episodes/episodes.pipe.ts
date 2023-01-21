import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodes',
})
export class EpisodesPipe implements PipeTransform {
  transform(episodes: string[]): string {
    let episodeNumbers = episodes.map((episode) => {
      return episode.split('https://rickandmortyapi.com/api/episode/')[1];
    });

    return episodeNumbers.length ? episodeNumbers.join(', ') : '-';
  }
}
