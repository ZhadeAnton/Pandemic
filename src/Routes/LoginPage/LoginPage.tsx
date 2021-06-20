import React, { useEffect } from 'react'
import { Nav, Tab } from 'react-bootstrap'

import './loginPage.scss'
import { useAppDispatch, useAppSelector } from '../../Hooks/PreTypedHooks'
import { resetAuthenticationMessage } from '../../Redux/User/UserActionCreators'

import SignIn from '../../Components/Custom/SingIn/SignIn'
import SignUp from '../../Components/Custom/SignUp/SignUp'
import Heading from '../../Components/Blocks/Heading/Heading'
import CustomToast from '../../Components/Custom/CustomToast/CustomToast'

export default function LoginPage() {
  const authenticationError = useAppSelector((state) => state.user.authenticationError!)
  const isSignIn = useAppSelector((state) => state.user.isSignIn)
  const isSignUp = useAppSelector((state) => state.user.isSignUp)
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(resetAuthenticationMessage())
    }
  }, [])

  return (
    <main className='login-page'>
      <CustomToast
        show={isSignIn}
        type='success'
        mainMessage="You are successfully siggned in!"
        headerMessage="Signing up success!"
        onReset={resetAuthenticationMessage}
      />

      <CustomToast
        show={isSignUp}
        type='success'
        mainMessage="You are successfully siggned up and logged in!"
        headerMessage="Signing up success!"
        onReset={resetAuthenticationMessage}
      />

      <CustomToast
        show={!!authenticationError}
        type='error'
        headerMessage="Authentication error"
        mainMessage={authenticationError}
        onReset={resetAuthenticationMessage}
      />

      <section className='login-page__wrapper'>
        <div className='login-page__content'>
          <Tab.Container
            mountOnEnter
            unmountOnExit
            defaultActiveKey="first"
          >
            <aside className='login-page__aside'>
              <div className='login-page__aside__overlay'></div>
              <Nav
                className="flex-column login-page__aside--tabs"
                variant="tabs"
              >
                <Nav.Item className='login-page__aside--tab'>
                  <Nav.Link
                    className='login-page__aside--link'
                    eventKey="first"
                  >
                      Sign In
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className='login-page__aside--tab'>
                  <Nav.Link
                    className='login-page__aside--link'
                    eventKey="second"
                  >
                      Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </aside>

            <section className='login-page__main'>
              <div className='login-page__main--overlay'></div>
              <div className='login-page__main--content'>
                <Nav
                  className="login-page__main--tabs"
                  variant="tabs"
                >
                  <Nav.Item className="login-page__main--tab">
                    <Nav.Link
                      className="login-page__main--link"
                      eventKey="first">
                      Sign In
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item className="login-page__main--tab">
                    <Nav.Link
                      className="login-page__main--link"
                      eventKey="second"
                    >Sign Up
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <div className='login-page__main--title'>
                  <Heading
                    title='Pandemic'
                    subTitle='E-Sports'
                  />
                </div>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <SignIn />
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <SignUp />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </section>
          </Tab.Container>
        </div>
      </section>
    </main>
  )
}

