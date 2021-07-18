import React from 'react'
import { NavLink } from 'react-router-dom'

import './postItem.scss'
import { IFnSetCurrentPost, IPost } from '../../../Interfaces/PostInterfaces'
import ConvertDate from '../../Custom/ConvertDate/ConvertDate'

interface Props {
  post: IPost,
  handlePostClick: IFnSetCurrentPost
}

export default function PostItem(props: Props) {
  return (
    <li className='post-item'>
      <div className='post-item__image-wrapper'>
        <img
          className='post-item__image-wrapper--image'
          src={props.post.image}
          alt={props.post.title}
          onClick={() => props.handlePostClick(props.post)}
        />
      </div>

      <div className='post-item__date'>
        <ConvertDate date={props.post.date}/>
      </div>

      <h3
        className='post-item__title'
        onClick={() => props.handlePostClick(props.post)}
      >
        {props.post.title}
      </h3>

      <p className='post-item__subtitle'>
        {props.post.subtitle}
      </p>

      <NavLink
        className='post-item__link'
        to={`/posts/${props.post.id}`}
        onClick={() => props.handlePostClick(props.post)}
      >
        READ MORE
        <i className="bi bi-plus post-item__link--icon" />
      </NavLink>
    </li>
  )
}
