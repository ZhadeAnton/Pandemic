import React from 'react'

import './postsList.scss'
import { IArrayOfPosts } from '../../../Interfaces/PostInterfaces'

import PostItem from '../PostItem/PostItem'

interface Props {
  posts: IArrayOfPosts
}

export default function PostsList(props: Props) {
  return (
    <ul className='posts-list'>
      {
        props.posts.map((post) => {
          return <PostItem key={post.id} post={post}/>
          post
        })
      }
    </ul>
  )
}
