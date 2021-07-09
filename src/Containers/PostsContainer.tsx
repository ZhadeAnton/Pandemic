import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHook'
import { IArrayOfPosts } from '../Interfaces/PostInterfaces'
import { getPosts } from '../Redux/Post/PostActionCreators'

import PostsPage from '../Routes/PostsPage/PostsPage'
import Preloader from '../Components/Custom/Preloader/Preloader'
import useSliceItemsHook from '../Hooks/SliceItemsHook'

export interface IPostsContainer {
  slicedPosts: IArrayOfPosts,
  pagesLength: number,
  itemsPerPage: number,
  currentPage: number
}

export default function PostsPageContainer() {
  const posts = useAppSelector((state) => state.posts.posts)
  const isLoading = useAppSelector((state) => state.posts.isLoading)
  const currentPage = useAppSelector((state) => state.posts.currentPage)
  const itemsPerPage = useAppSelector((state) => state.posts.postsPerPage)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const slisedItems = useSliceItemsHook({
    itemsForSlide: posts, currentPage, itemsPerPage})

  if (isLoading) return <Preloader preloader='cube'/>

  return (
    <PostsPage
      slicedPosts={slisedItems.slicedItems}
      pagesLength={slisedItems.pagesLength}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
    />
  )
}
