import React from 'react'
import { Nav, Tab } from 'react-bootstrap'

import './loginPage.scss'
import { IAuthContainer } from '../../Containers/LoginContainer'

import SignIn from '../../Components/Custom/SingIn/SignIn'
import SignUp from '../../Components/Custom/SignUp/SignUp'
import BrandLogo from '../../Components/Custom/BrandLogo/BrandLogo'

export default function LoginPage(props: IAuthContainer) {
  return (
    <main className='login-page'>
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
                  <BrandLogo />
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

