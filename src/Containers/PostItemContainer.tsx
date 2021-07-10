import React from 'react'

import { useAppSelector } from '../Hooks/PreTypedHook'
import { IPost } from '../Interfaces/PostInterfaces'

import PostItemPage from '../Routes/PostItemPage/PostItemPage'

export interface IPostItemContainer {
  currentPost: IPost
}

export default function PostItemContainer() {
  const currentPost = useAppSelector((state) => state.posts.currentPost!)

  return (
    <PostItemPage
      currentPost={currentPost}
    />
  )
}
