import { ITeam } from './TeamInterfaces';

export interface IMatchStats {
  title: string,
  value: string,
  icon?: boolean,
  info?: string | number
}

export interface IMatch {
  id: string,
  icon: string,
  tournament: string,
  background: string,
  discipline: string,
  score: string,
  date: any,
  team1: ITeam,
  team2: ITeam,
  stats: Array<IMatchStats>
}

export type ArrayOfMatches = Array<IMatch>
