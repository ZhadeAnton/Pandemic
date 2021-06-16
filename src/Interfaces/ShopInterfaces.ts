export interface IShopItem {
  id: string,
  image: string,
  imageFull: string,
  title: string,
  price: string,
  popularity: number,
  description: string,
  details: string,
  reviews: Array<string>,
  categories: Array<string>,
  sale?: boolean,
  newPrice?: string
}
