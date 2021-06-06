import * as H from 'history'

export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

export interface IAnnounce {
  title: string,
  image: string
}

export interface IPlayerStats {
  title: string,
  value: number | string,
  icon: boolean,
  info: string
}

export interface IPlayer {
  id: string,
  nickname: string,
  role: string,
  photo: string,
  age: string,
  country: string,
  discipline: string,
  logo: string,
  capitan?: boolean
  about: string,
  stats: IPlayerStats,
  team: string,
  measures: [
    {
      title: string,
      value: string
    }
  ]
}

export interface ITeam {
  id: string,
  discipline: string,
  logo: string,
  players: Array<IPlayer>,
  tag: string,
  about: {
    description: string
  }
}

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

export interface IDiscipline {
  name: string
}
