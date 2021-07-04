import React from 'react'

import './shopItemsList.scss'
import { IUser } from '../../../Interfaces/UserInterfaces'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'
import { IShopState } from '../../../Redux/Shop/ShopReducer'
import useShopListAnimation from '../../../Hooks/ShopItemsListHooks'

import Badge from '../../Custom/Badge/Badge'
import useShopToast from '../../../Hooks/ShopToastHook'
import useHistoryPush from '../../../Hooks/HistoryHook'

interface Props {
  shopItems: IShopState['shopItems'],
  userUid: IUser['uid']
}

interface IHandleAddCartButton {
  (shopItemId: IShopItem['id'], shopItemName: IShopItem['title']): void
}

export default function ShopItemsList(props: Props) {
  const shopListHook = useShopListAnimation()
  const redirectToLogin = useHistoryPush()

  const animated = shopListHook.animated
  const springAnimation = shopListHook.shopItemsAnimation(props.shopItems)

  const handleButtonClick: IHandleAddCartButton = (shopItemId, shopItemName) => {
    if (!props.userUid) {
      redirectToLogin('/login')
      return
    }

    shopListHook.handleAddShopItemToCart(props.userUid, shopItemId)
    useShopToast(shopItemName)
  }

  return (
    <ul className='shop-items-list'>
      {
        springAnimation.map((style, i) => (
          <animated.li
            key={i}
            className='shop-item'
            style={{transform: style.transform, opacity: style.opacity}}
            onMouseEnter={() => shopListHook.handleItemHover(i)}
            onMouseLeave={() => shopListHook.setIndex(null)}
            onClick={(e) => shopListHook.handleSelectShopItem(e, props.shopItems[i])}
          >
            <div className='shop-item__wrapper'>
              <animated.div
                className='shop-item__overlay'
                style={{backgroundColor: style.overlay}}
              />

              <animated.img
                className='shop-item__image'
                style={{height: style.imageHiegth}}
                src={props.shopItems[i].image}
                alt={props.shopItems[i].title}
              />

              {
                props.shopItems[i].sale
                ?
                  <div className='shop-item__badge'>
                    <Badge title='Sale'/>
                  </div>
                :
                  null
              }

              <animated.div
                className='shop-item__content'
                style={{height: style.contentHeigth}}
              >
                <animated.div style={{marginBottom: style.contentMargin}}>
                  <h3 className='shop-item__content--title'>
                    {props.shopItems[i].title}
                  </h3>

                  {
                    props.shopItems[i].sale
                    ?
                      <div className='shop-item__content--sale-wrapper'>
                        <h6 className='shop-item__content--price-old'>
                          {props.shopItems[i].price}
                        </h6>

                        <h6 className='shop-item__content--price-new'>
                          {props.shopItems[i].newPrice}
                        </h6>
                      </div>
                    :
                      <h6 className='shop-item__content--price'>
                        {props.shopItems[i].price}
                      </h6>
                  }
                </animated.div>

                <animated.button
                  className='shop-item__content--button'
                  style={{transform: style.buttonTransform}}
                  onClick={() =>
                    handleButtonClick(props.shopItems[i].id, props.shopItems[i].title)}
                >
                  Add to cart
                </animated.button>
              </animated.div>
            </div>
          </animated.li>
        ))
      }
    </ul>
  )
}
