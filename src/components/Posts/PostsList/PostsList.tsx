import React from 'react'

import './postsList.scss'
import { IArrayOfPosts, IFnSetCurrentPost } from '../../../Interfaces/PostInterfaces'

import PostItem from '../PostItem/PostItem'

interface Props {
  posts: IArrayOfPosts,
  handlePostClick: IFnSetCurrentPost
}

export default function PostsList(props: Props) {
  return (
    <ul className='posts-list'>
      {
        props.posts.map((post) => {
          return (
            <PostItem
              key={post.id}
              post={post}
              handlePostClick={props.handlePostClick}
            />
          )
          post
        })
      }
    </ul>
  )
}
