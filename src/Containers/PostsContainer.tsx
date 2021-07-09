import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHook'
import { IArrayOfPosts } from '../Interfaces/PostInterfaces'
import { getPosts } from '../Redux/Post/PostActionCreators'

import PostsPage from '../Routes/PostsPage/PostsPage'

export interface IPostsContainer {
  posts: IArrayOfPosts
}

export default function PostsPageContainer() {
  const posts = useAppSelector((state) => state.posts.posts)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <PostsPage
      posts={posts}
    />
  )
}
