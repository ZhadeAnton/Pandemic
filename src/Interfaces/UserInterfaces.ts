export interface IUser {
  displayName: string,
  email: string,
  id: string,
  photoURL: string,
  createAt: {[key: string]: string},
  uid: string,
  data?: any
}
