import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

import './reviewsTabs.scss'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'
import ShopItemReview from '../ShopItemReview/ShopItemReview'

interface Props {
  itemName: IShopItem['title'],
  description: IShopItem['description'],
  reviews: IShopItem['reviews']
}

export default function ReviewsTabs(props: Props) {
  const reviewsLength = props.reviews.length

  return (
    <Tabs defaultActiveKey="reviews">
      <Tab
        tabClassName='review-tabs__tab review-tabs__tab-description'
        eventKey="description"
        title="DESCRIPTION"
      >
        <h4 className='review-tabs__tab-description--title'>
          Description
        </h4>

        <p className='review-tabs__tab-description--about'>
          {props.description}
        </p>
      </Tab>

      <Tab
        tabClassName='review-tabs__tab review-tabs__tab-reviews'
        eventKey="reviews"
        title={`REVIEWS (${reviewsLength})`}
      >
        <h4 className='review-tabs__tab-reviews--title'>
          {reviewsLength} reviews for <span>{props.itemName}</span>
        </h4>

        {
          props.reviews.map((review, idx: number) => {
            return <ShopItemReview key={idx} review={review}/>
          })
        }
      </Tab>
    </Tabs>
  )
}
