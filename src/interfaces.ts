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
  stats: [
    title: string,
    value: number | string,
    icon: boolean,
    info: string
  ]
}

export interface ITeam {
  discipline: string,
  logo: string,
  players: Array<IPlayer>,
  tag: string
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
  stats: {
    winner: string,
    duration: number,
    kills: number,
    maps: number,
    rounds: number,
  }
}

export interface IDiscipline {
  name: string
}
