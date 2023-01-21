export interface IFilter {
  page: number;
}

export interface ICharacter {
  id: number;
  name: string;
  created: string;
  episode: string[];
  gender: string;
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
  info: any;
  results: ICharacter[];
}

export interface IInfo {
  count: number;
  pages: number;
  prev: string;
  next: string;
}
