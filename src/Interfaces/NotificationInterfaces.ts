export interface INotification {
  id: number,
  type: 'ERROR' | 'SUCCESS',
  message: string
}

export type IArrayOfNotifications = Array<INotification>
