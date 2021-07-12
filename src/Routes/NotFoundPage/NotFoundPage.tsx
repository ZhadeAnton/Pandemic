import React from 'react'
import { NavLink } from 'react-router-dom'

import './notFoundPage.scss'

export default function NotFoundPage() {
  return (
    <main className='not-found-page'>
      <section className='not-found-page__wrapper container'>
        <div className='not-found-page__content'>
          <h2 className='not-found-page__content--title'>
            <span>404</span> page not found
          </h2>

          <h2 className='not-found-page__content--title'>
            looks like you are lost
          </h2>

          <NavLink
            to='/'
            className='not-found-page__content--link'
          >
            Go Home

            <i className="bi bi-arrow-right-short" />
          </NavLink>
        </div>
      </section>
    </main>
  )
}
