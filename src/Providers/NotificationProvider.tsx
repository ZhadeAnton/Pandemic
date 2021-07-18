import React, { createContext } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { IFnRemoveNotification } from '../Interfaces/NotificationInterfaces';
import { removeNotification } from '../Redux/General/GeneralActionCreators';

import Notification from '../Components/Notification/Notification'

const NotificationContext = createContext('');

export default function NotificationProvider(props: any) {
  const notifications = useAppSelector((state) => state.general.notifications)

  const dispatch = useAppDispatch()

  const handleRemoveNotification: IFnRemoveNotification = (id) => {
    dispatch(removeNotification(id))
  }

  return (
    <NotificationContext.Provider value={''}>
      <div className='notifications-wrapper'>
        <ul>
          {
            notifications.map((note) => {
              return (
                <Notification
                  key={note.id}
                  {...note}
                  onRemoveNotification={handleRemoveNotification}
                />
              )
            })
          }
        </ul>
      </div>
      {props.children}
    </NotificationContext.Provider>
  )
}
