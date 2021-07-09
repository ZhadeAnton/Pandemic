import React from 'react'

import './postPage.scss'
import { IPostsContainer } from '../../Containers/PostsContainer'
import { recentPosts, categories } from '../../Utils/PostsUtils'

import PostsList from '../../Components/Blocks/PostsList/PostsList'
import SectionBanner from '../../Components/Sections/SectionBanner/SectionBanner'
import PostsNavigation from '../../Components/Blocks/PostsNavigation/PostsNavigation'
import CustomPagination from '../../Components/Blocks/Pagination/Pagination'

export default function PostsPage(props: IPostsContainer) {
  return (
    <main className='posts-page'>
      <SectionBanner sectionName='Posts'/>

      <div className='posts-page__wrapper container'>
        <div className='posts-page__content'>
          <div className='posts-page__content--posts-list'>
            <PostsList posts={props.slicedPosts}/>

            <CustomPagination
              currentPage={props.currentPage}
              itemsPerPage={props.itemsPerPage}
              pagesLength={props.pagesLength}
            />
          </div>

          <aside className='posts-page__content--posts-nav'>
            <PostsNavigation
              title='Recent posts'
              elements={recentPosts}
            />

            <PostsNavigation
              title='Categories'
              elements={categories}
            />
          </aside>
        </div>
      </div>
    </main>
  )
}
