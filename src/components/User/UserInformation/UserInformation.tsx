import React from 'react'

import './userInformation.scss'
import { IUser } from '../../../Interfaces/UserInterfaces'
import useUserInformation from '../../../Hooks/useUserInformation'

import ButtonSecondary from '../../Custom/ButtonSecondary/ButtonSecondary'

interface Props {
  image: IUser['photoURL'],
  name: IUser['displayName'],
  email: IUser['email'],
  onClose: () => void
}

export default function UserInformation(props: Props) {
  const userInformationHook = useUserInformation()

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
          <i
            className="bi bi-person-bounding-box user-information__header--image-icon"
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
        <ButtonSecondary onClick={userInformationHook.handleSignOut}>
          Sign out
        </ButtonSecondary>
      </div>
    </div>
  )
}
