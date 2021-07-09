import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHook'
import { IArrayOfPosts } from '../Interfaces/PostInterfaces'
import { getPosts } from '../Redux/Post/PostActionCreators'

import PostsPage from '../Routes/PostsPage/PostsPage'
import Preloader from '../Components/Custom/Preloader/Preloader'

export interface IPostsContainer {
  posts: IArrayOfPosts,
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

  // Indexes of first and last items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  // Pagination's buttons
  const pagesLength = Math.ceil(posts.length / itemsPerPage)

  // Slicing items by indexes of first and last items
  const slicedPosts = posts.length > itemsPerPage
  ? posts.slice(indexOfFirstItem, indexOfLastItem)
  : posts

  if (isLoading) return <Preloader preloader='cube'/>

  return (
    <PostsPage
      posts={slicedPosts}
      pagesLength={pagesLength}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
    />
  )
}
