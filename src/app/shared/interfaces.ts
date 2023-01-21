import { Gender } from './enums';

export interface IFilter {
  page: number;
}

export interface ICharacter {
  id: number;
  name: string;
  created: string;
  episode: string[];
  gender: Gender;
  image: string;
  location: ILocation;
  origin: ILocation;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface ICharacterArray {
  info: IInfo;
  results: ICharacter[];
}

export interface IInfo {
  count: number;
  pages: number;
  prev: string;
  next: string;
}
