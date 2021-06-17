import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import './userProfile.scss'
import { useAppSelector } from '../../../Hooks/PreTypedHooks'

import UserAvatar from '../UserAvatar/UserAvatar'
import UserInformation from '../UserInformation/UserInformation'
import LoginButton from '../../Custom/LoginButton/LoginButton'

export default function UserProfile() {
  const [isVisible, setIsVisible] = useState(false)
  const currentuser = useAppSelector((state) => state.user.currentUser!)

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
        currentuser
        ?
          <>
            <div
              className='user-profile__avatar'
              onClick={() => setIsVisible(!isVisible)}
            >
              <UserAvatar avatar={currentuser.photoURL}/>
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
                      name={currentuser.displayName}
                      email={currentuser.email}
                      image={currentuser.photoURL}
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
