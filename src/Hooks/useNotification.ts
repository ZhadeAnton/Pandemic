import { v4 } from 'uuid'

import { useAppDispatch } from './PreTypedHook'
import { addNotification } from '../Redux/General/GeneralActionCreators'
import { IFnAddNotification } from '../Interfaces/MainInterfaces'

export default function useNotification() {
  const dispatch = useAppDispatch()

  const handleUseNotification: IFnAddNotification = (type, message) => {
    dispatch(addNotification(type, message, v4()))
  }

  return {
    handleUseNotification
  }
}
