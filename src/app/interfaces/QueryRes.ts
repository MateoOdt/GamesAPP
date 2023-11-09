import { Game } from './Game';

export interface QueryRes {
  count: number;
  next: string;
  previous: string;
  results: Array<Game>;
}
