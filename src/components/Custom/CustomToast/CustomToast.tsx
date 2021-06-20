import React, { useState, useEffect } from 'react'
import { Toast } from 'react-bootstrap'

import './customToast.scss'
import { useAppDispatch } from '../../../Hooks/PreTypedHooks';
import { resetAuthenticationError } from '../../../Redux/User/UserActionCreators';

interface Props {
  error: string,
  typeError: string,
  resetError: any
}

export default function CustomToast(props: Props) {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (props.error && props.error.length !== 0) setShow(!show)
  }, [props.error])

  const handleToastClose = () => {
    setShow(false)
    setTimeout(() => dispatch(props.resetError()), 150)
  }

  useEffect(() => {
    return () => {
      dispatch(resetAuthenticationError())
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 1 + '%',
        left: 1 + '%',
        zIndex: 1000
      }}
    >
      <Toast
        show={show}
        onClose={handleToastClose}
        animation
        delay={3500}
        autohide
        bsPrefix='toast-custom'
      >
        <Toast.Header
          bsPrefix='toast-custom__header'
          closeButton={false}
        >
          <i className="bi bi-exclamation-triangle toast-custom__header--icon" />

          <strong className="toast-custom__header--title">
            {props.typeError} error
          </strong>

          <i
            className="bi bi-x toast-custom__header--close"
            onClick={handleToastClose}
          />
        </Toast.Header>

        <Toast.Body className="toast-custom__body">
          <h6 className="toast-custom__body--title">
            {props.error}
          </h6>
        </Toast.Body>
      </Toast>
    </div>
  )
}
