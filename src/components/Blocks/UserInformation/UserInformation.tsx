import React from 'react'

import './userInformation.scss'
import { useAppDispatch } from '../../../Hooks/PreTypedHooks'
import { IUser } from '../../../Interfaces/UserInterfaces'
import { signOut } from '../../../Redux/User/UserActionCreators'

import ButtonSecondary from '../../Sections/ButtonSecondary/ButtonSecondary'

interface Props {
  image: IUser['photoURL'],
  name: IUser['displayName'],
  email: IUser['email'],
  onClose: () => void
}

export default function UserInformation(props: Props) {
  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <div className='user-information'>
      <i
        className="bi bi-x user-information__close-button"
        onClick={props.onClose}
      />

      <div className='user-information__header'>
        {
          props.image
          ?
            <img
              className='user-information__header--image'
              src={props.image}
              alt="User image"
            />
          :
            <img
              className='user-information__header--image'
              src='https://i.ibb.co/Bfhrxx7/user-1.png'
              alt="User image"
            />
        }

        <h3 className='user-information__header--name'>
          {props.name}
        </h3>

        <h5 className='user-information__header--email'>
          {props.email}
        </h5>
      </div>

      <div className='user-information__sign-out'>
        <ButtonSecondary onClick={handleSignOut}>
          Sign out
        </ButtonSecondary>
      </div>
    </div>
  )
}
