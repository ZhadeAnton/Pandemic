import React from 'react'
import { Nav, Tab } from 'react-bootstrap'

import './loginPage.scss'
import SignIn from '../../Components/Custom/SingIn/SignIn'
import SignUp from '../../Components/Custom/SignUp/SignUp'

export default function LoginPage() {
  return (
    <main className='login-page'>
      <section className='login-page__wrapper'>
        <div className='login-page__content'>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <aside className='login-page__aside'>
              <Nav variant="pills" className="flex-column login-page__aside--tabs">
                <Nav.Item>
                  <Nav.Link eventKey="first">Sign In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </aside>

            <section className='login-page__main'>
              <div className='login-page__main--content'>
                <div className='login-page__main--title'>
                  <h2>Pandemic E-sports</h2>
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

