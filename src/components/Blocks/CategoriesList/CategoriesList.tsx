import React from 'react'

import './categoriesList.scss'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'

interface Props {
  categories: IShopItem['categories']
}

export default function CategoriesList(props: Props) {
  return (
    <div className='categories'>
      <h5 className='categories__title'>
        Categories:
      </h5>

      <ul className='categories__list'>
        {
          props.categories.map((item, idx: number) => {
            return (
              <li
                key={idx}
                className='categories__list--item'
              >
                <h6 className='categories__list--title'>
                  {item}
                </h6>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
