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

export type IArrayOfPlayers = Array<IPlayer>
