export interface IAnnounce {
  title: string,
  image: string
}

interface ITeam {
  discipline: string,
  logo: string,
  players: [
    {
      nickname: string,
      role: string
    }
  ],
  tag: string
}

export interface IMatch {
  discipline: string,
  score: string,
  date: any,
  team1: ITeam,
  team2: ITeam
}