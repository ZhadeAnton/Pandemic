import React from 'react'

import './postItemPage.scss'
import { IPostItemContainer } from '../../Containers/PostItemContainer'
import { socialList } from '../../Utils/FooterUtils'
import { categories, recentPosts } from '../../Utils/PostsUtils'

import ConvertDate from '../../Components/Blocks/ConvertDate/ConvertDate'
import PostsNavigation from '../../Components/Blocks/PostsNavigation/PostsNavigation'
import SocialList from '../../Components/Blocks/SocialList/SocialList'
import BackButton from '../../Components/Custom/BackButton/BackButton'

export default function PostItemPage(props: IPostItemContainer) {
  return (
    <main className='post-item-page'>
      <div className='posts-page__wrapper container'>
        <div className='post-item-page__back-botton'>
          <BackButton />
        </div>

        <section className='posts-page__content'>
          <section className='posts-page__content--posts-list'>
            <div className='post-item__image-wrapper'>
              <img
                className='post-item__image-wrapper--image'
                src={props.currentPost.image}
                alt={props.currentPost.title}
              />
            </div>

            <div className='post-item__date'>
              <ConvertDate date={props.currentPost.date}/>
            </div>

            <h3 className='post-item__title'>
              {props.currentPost.title}
            </h3>

            <p className='post-item__subtitle'>
              {props.currentPost.post}
            </p>

            <div className='post-item-page__share'>
              <h4 className='post-item-page__share--title'>
                Share :
              </h4>

              <SocialList socialList={socialList}/>
            </div>
          </section>

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
        </section>
      </div>
    </main>
  )
}
