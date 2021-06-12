export interface IShopItem {
  id: string,
  image: string,
  title: string,
  price: string,
  popularity: number,
  sale?: boolean,
  newPrice?: string
}
