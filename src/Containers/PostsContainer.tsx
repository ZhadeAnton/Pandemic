import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { IArrayOfPosts, IFnSetCurrentPost } from '../Interfaces/PostInterfaces'
import { getPosts, setCurrentPost } from '../Redux/Post/PostActionCreators'
import useSliceItems from '../Hooks/useSliceItems'
import useHistoryPush from '../Hooks/useHistory'

import PostsPage from '../Routes/PostsPage/PostsPage'
import Preloader from '../Components/Custom/Preloader/Preloader'

export interface IPostsContainer {
  slicedPosts: IArrayOfPosts,
  pagesLength: number,
  itemsPerPage: number,
  currentPage: number,
  handlePostClick: IFnSetCurrentPost
}

export default function PostsPageContainer() {
  const posts = useAppSelector((state) => state.posts.posts)
  const isLoading = useAppSelector((state) => state.posts.isLoading)
  const currentPage = useAppSelector((state) => state.posts.currentPage)
  const itemsPerPage = useAppSelector((state) => state.posts.postsPerPage)

  const dispatch = useAppDispatch()

  const redirectToPostItem = useHistoryPush()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const slisedItems = useSliceItems({
    itemsForSlide: posts, currentPage, itemsPerPage})

  const handlePostClick: IFnSetCurrentPost = (post) => {
    dispatch(setCurrentPost(post))
    redirectToPostItem(`/posts/${post.id}`)
  }

  if (isLoading) return <Preloader preloader='cube'/>

  return (
    <PostsPage
      slicedPosts={slisedItems.slicedItems}
      pagesLength={slisedItems.pagesLength}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      handlePostClick={handlePostClick}
    />
  )
}
