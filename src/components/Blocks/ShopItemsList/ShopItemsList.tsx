import React, { useState } from 'react'
import { useSprings, animated } from 'react-spring'

import './shopItemsList.scss'
import { IShopState } from '../../../Redux/Shop/ShopReducer'

import Badge from '../../Custom/Badge/Badge'
import useSelectShopItem from '../../../Hooks/ShopItemHooks'

interface Props {
  shopItems: IShopState['shopItems']
}

export default function ShopItemsList(props: Props) {
  const [index, setIndex] = useState<number | null>(null)
  const [isDelayed, setIsDelayd] = useState(true)

  const shopItemHook = useSelectShopItem()

  const spring = useSprings(props.shopItems.length, props.shopItems.map((_, i) => ({
    delay: isDelayed ? 150 * i : 0,
    opacity: 1,
    transform: 'translateY(0)',
    overlay: i === index ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0, 0)',
    imageHiegth: i === index ? '90%' : '100%',
    contentHeigth: i === index ? '50%' : '40%',
    contentMargin: i === index ? '30%' : '0%',
    buttonTransform: i === index ? 'translate(-50%, -50%)' : 'translate(-50%, 200%)',
    from: {
      opacity: 0,
      overlay: 'rgba(0, 0, 0, 0)',
      transform: 'translateY(100px)',
      imageHiegth: '100%',
      contentHeigth: '40%',
      contentMargin: '0%',
      buttonTransform: 'translate(50%, 200%)',
    }
  })))

  const handleItemHover = (i: number) => {
    setIndex(i)
    setIsDelayd(false)
  }

  return (
    <ul className='shop-items-list'>
      {
        spring.map((style, i) => (
          <animated.li
            key={i}
            className='shop-item'
            style={{transform: style.transform, opacity: style.opacity}}
            onMouseEnter={() => handleItemHover(i)}
            onMouseLeave={() => setIndex(null)}
            onClick={() => shopItemHook.handleSelectShopItem(props.shopItems[i])}
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
