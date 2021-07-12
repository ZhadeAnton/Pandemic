import React from 'react'
import { NavLink } from 'react-router-dom'

import './sideBar.scss'
import { defaultSocialList } from '../../../Utils/FooterUtils'

import HamburgerMenu from '../../Custom/HamburgerMenu/HamburgerMenu'
import { headerNavMenu } from '../../../Utils/HeaderUtils'

interface Props {
  onToggleSidebar: () => void
}

export default function SideBar(props: Props) {
  return (
    <main className='sidebar'>
      <div className='sidebar__wrapper'>
        <div className='sidebar__hamburger-menu'>
          <HamburgerMenu onToggleSidebar={props.onToggleSidebar}/>
        </div>

        <aside className='sidebar__aside'>
          <h5 className='sidebar__aside--title'>
            Folow us
          </h5>

          <nav className='sidebar__aside--navigation'>
            {
              defaultSocialList.map((item) => {
                return (
                  <li
                    key={item}
                    className='sidebar__aside--item'
                  >
                    <i className={`bi bi-${item}`} />
                  </li>
                )
              })
            }
          </nav>
        </aside>

        <div className='sidebar__content container'>
          <nav className='sidebar__navigation'>
            <ul className='sidebar__navigation--list'>
              {
                headerNavMenu.map((item) => {
                  return (
                    <NavLink
                      key={item.title}
                      to={`${item.link}`}
                      className='sidebar__navigation--link'
                      onClick={props.onToggleSidebar}
                    >
                      {item.title}
                    </NavLink>
                  )
                })
              }
            </ul>
          </nav>

          <div className='sidebar__column'>
            <h2 className='sidebar__column--text'>
              Search
            </h2>
          </div>
        </div>
      </div>
    </main>
  )
}
