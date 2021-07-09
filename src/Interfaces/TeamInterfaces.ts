import { IPlayer } from './PlayerInterfaces';

export interface ITeam {
  id: string,
  discipline: string,
  logo: string,
  players: Array<IPlayer>,
  tag: string,
  sponsors: Array<string>,
  about: {
    description: string
  }
}
