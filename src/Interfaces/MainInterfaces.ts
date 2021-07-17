export type IDiscipline = string

export type ArrayOfIDisciplines = Array<IDiscipline>

export interface IFnAddNotification {
  (type: 'ERROR' | 'SUCCESS', message: string, id: number): any
}
