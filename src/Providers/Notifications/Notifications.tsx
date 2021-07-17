import React, { useState, useEffect } from 'react';

import './notifications.scss'
import { useAppDispatch } from '../../Hooks/PreTypedHook';
import { removeNotification } from '../../Redux/General/GeneralActionCreators';

interface Props {
  id: number,
  type: 'ERROR' | 'SUCCESS',
  message: string
}

export default function Notification(props: Props) {
  const [exit, setExit] = useState(false)
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState<any>(null)

  const dispatch = useAppDispatch()

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5
        }

        clearInterval(id)
        return prev;
      });
    }, 20)

    setIntervalID(id)
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID)
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch(removeNotification(props.id))
    }, 400)
  }

  useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification()
    }
  }, [width])

  useEffect(() => {
    handleStartTimer()
  }, [])

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`notification-item ${
      props.type === 'SUCCESS' ? 'success' : 'error'
      } ${exit ? 'exit' : ''}`}
    >
      <p>
        {props.message}
      </p>

      <div className='bar' style={{ width: `${width}%` }} />
    </div>
  )
}
