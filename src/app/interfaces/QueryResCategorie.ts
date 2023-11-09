import { Categorie } from './Categorie';

export interface QueryResCategorie {
  count: number;
  next: string;
  previous: string;
  results: Array<Categorie>;
}
