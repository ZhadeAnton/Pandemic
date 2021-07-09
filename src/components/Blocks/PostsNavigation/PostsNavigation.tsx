import React from 'react'

import './postsNavigation.scss'

import PostNavItem from '../PostNavItem/PostNavItem'

interface Props {
  title: string,
  elements: Array<string>
}

export default function PostsNavigation(props: Props) {
  return (
    <nav className='post-navigation'>
      <h3 className='post-navigation__title'>
        {props.title}
      </h3>

      <ul>
        {
          props.elements.map((item) => {
            return <PostNavItem key={item} navItem={item}/>
          })
        }
      </ul>
    </nav>
  )
}
