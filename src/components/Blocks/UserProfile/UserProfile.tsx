import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import './userProfile.scss'
import { IUserState } from '../../../Redux/User/UserReducer'

import UserAvatar from '../UserAvatar/UserAvatar'
import UserInformation from '../UserInformation/UserInformation'
import LoginButton from '../../Custom/LoginLink/LoginLink'

interface Props {
  currentUser: IUserState['currentUser']
}

export default function UserProfile(props: Props) {
  const [isVisible, setIsVisible] = useState(false)

  const styles = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    reset: true,
    reverse: !isVisible ? true : false
  })

  const handleCloseModal = () => {
    setIsVisible(false)
  }

  return (
    <div className='user-profile'>
      {
        props.currentUser
        ?
          <>
            <div
              className='user-profile__avatar'
              onClick={() => setIsVisible(!isVisible)}
            >
              <UserAvatar avatar={props.currentUser.photoURL}/>
            </div>

            <div
              className='user-profile__information'
              onMouseLeave={() => setIsVisible(!isVisible)}
            >
              {
                isVisible
                ?
                  <animated.div style={styles}>
                    <UserInformation
                      name={props.currentUser.displayName}
                      email={props.currentUser.email}
                      image={props.currentUser.photoURL}
                      onClose={handleCloseModal}
                    />
                  </animated.div>
                :
                  null
              }
            </div>
          </>
        :
          <LoginButton />
      }
    </div>
  )
}
