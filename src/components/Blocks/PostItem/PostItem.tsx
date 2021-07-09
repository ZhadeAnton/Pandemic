import React from 'react'
import { NavLink } from 'react-router-dom'

import './postItem.scss'
import { IPost } from '../../../Interfaces/PostInterfaces'

interface Props {
  post: IPost
}

export default function PostItem(props: Props) {
  return (
    <li className='post-item'>
      <div className='post-item__image-wrapper'>
        <img
          className='post-item__image-wrapper--image'
          src={props.post.image}
          alt={props.post.title}
        />
      </div>

      <h3 className='post-item__title'>
        {props.post.title}
      </h3>

      <p className='post-item__subtitle'>
        {props.post.subtitle}
      </p>

      <NavLink
        className='post-item__link'
        to={`/posts/${props.post.id}`}
      >
        READ MORE
        <i className="bi bi-plus post-item__link--icon"></i>
      </NavLink>
    </li>
  )
}
