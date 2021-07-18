import React from 'react'

import './shopItemReview.scss'

interface Props {
  review: string
}

export default function ShopItemReview(props: Props) {
  return (
    <div className='review'>
      <div className='review__icon-wrapper'>
        <i className="bi bi-person-circle review__icon-wrapper--icon" />
      </div>
      <div className='review__content'>
        <h6 className='review__content--user-name'>
          John Smith
        </h6>

        <h5 className='review__content--text'>
          {props.review}
        </h5>

        <ul className='review__likes-list'>
          <li className='review__likes-list--item'>
            8 <i className="bi bi-hand-thumbs-up review__likes-list--icon" />
          </li>

          <li className='review__likes-list--item'>
            1 <i className="bi bi-hand-thumbs-down review__likes-list--icon" />
          </li>
        </ul>
      </div>
    </div>
  )
}
