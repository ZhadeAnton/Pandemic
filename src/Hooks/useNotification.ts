import { INotification } from './../Interfaces/NotificationInterfaces';
import { v4 } from 'uuid'

import { useAppDispatch } from './usePreTypedHook'
import { addNotification } from '../Redux/General/GeneralActionCreators'


export default function useNotification() {
  const dispatch = useAppDispatch()

  const handleAddNotification = (
      type: INotification['type'], message: INotification['message']) => {
    dispatch(addNotification(type, message, v4()))
  }

  return {
    handleAddNotification
  }
}
