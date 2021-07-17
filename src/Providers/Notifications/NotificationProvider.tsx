import React, { createContext } from 'react'
import { useAppSelector } from '../../Hooks/PreTypedHook'
import Notification from './Notifications'

const NotificationContext = createContext('');

export default function NotificationProvider(props: any) {
  const notifications = useAppSelector((state) => state.general.notifications)

  return (
    <NotificationContext.Provider value={''}>
      <div className='notifications-wrapper'>
        <ul>
          {
            notifications.map((note) => {
              return <Notification key={note.id} {...note}/>
            })
          }
        </ul>
      </div>
      {props.children}
    </NotificationContext.Provider>
  )
}
