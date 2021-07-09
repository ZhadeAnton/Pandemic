export interface IPost {
  id: string,
  date: any,
  image: string,
  post: string,
  subtitle: string,
  title: string
}

export type IArrayOfPosts = Array<IPost>

