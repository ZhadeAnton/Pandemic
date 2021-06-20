import React, { useState, useEffect } from 'react'
import { Toast } from 'react-bootstrap'

import './customToast.scss'
import { useAppDispatch } from '../../../Hooks/PreTypedHooks';
import { resetAuthenticationMessage } from '../../../Redux/User/UserActionCreators';

interface Props {
  show: boolean,
  type: 'error' | 'success',
  headerMessage: string,
  mainMessage: string,
  onReset: any
}

export default function CustomToast(props: Props) {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (props.show) setShow(!show)
  }, [props.show])

  const handleToastClose = () => {
    setShow(false)
    setTimeout(() => dispatch(props.onReset()), 150)
  }

  useEffect(() => {
    return () => {
      dispatch(resetAuthenticationMessage())
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 2 + '%',
        left: 2 + '%',
        zIndex: 1000
      }}
    >
      <Toast
        show={show}
        onClose={handleToastClose}
        animation
        delay={3000}
        autohide
        bsPrefix='toast-custom'
        style={
          props.type === 'error'
          ?
            {
              borderBottom: 6 + 'px solid #ff0033'
            }
          :
            {
              borderBottom: 6 + 'px solid #68fe9a'
            }
        }
      >
        <Toast.Header
          bsPrefix='toast-custom__header'
          closeButton={false}
        >
          {
            props.type === 'error'
            ?
              <i
                style={{color: '#ff0033'}}
                className="bi bi-exclamation-triangle toast-custom__header--icon"
              />
            :
              <i
                style={{color: '#68fe9a'}}
                className="bi bi-check-all toast-custom__header--icon"
              />
          }

          <strong className="toast-custom__header--title">
            {props.headerMessage}
          </strong>

          <i
            className="bi bi-x toast-custom__header--close"
            onClick={handleToastClose}
          />
        </Toast.Header>

        <Toast.Body className="toast-custom__body">
          <h6 className="toast-custom__body--title">
            {props.mainMessage}
          </h6>
        </Toast.Body>
      </Toast>
    </div>
  )
}
