import { useState } from 'react'
import { useSprings, animated } from 'react-spring'

import useHistoryPush from './useHistory'
import { useAppDispatch } from './usePreTypedHook'
import { setCurrentShopItem } from '../Redux/Shop/ShopActionCreators'
import { addShopItemToCart } from '../Redux/Cart/CartActionCreators'
import { ArrayOfShopItems, IShopItem } from '../Interfaces/ShopInterfaces'
import { IFnAddShopItemToCart } from '../Interfaces/CartInterfaces'

export default function useShopListAnimation() {
  const [index, setIndex] = useState<number | null>(null)
  const [isDelayed, setIsDelayd] = useState(true)

  const redirectToShopItem = useHistoryPush()
  const dispatch = useAppDispatch()

  const shopItemsAnimation = (shopItems: ArrayOfShopItems) => {
    return useSprings(shopItems.length, shopItems.map((_, i) => ({
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
  }

  const handleItemHover = (item: number) => {
    setIndex(item)
    setIsDelayd(false)
  }

  const handleAddShopItemToCart: IFnAddShopItemToCart = (userUid, shopItemId) => {
    dispatch(addShopItemToCart({userUid, shopItemId}))
  }

  const handleSelectShopItem = (e: any, shopItem: IShopItem) => {
    if (e.target.tagName !== 'BUTTON') {
      redirectToShopItem(`/shop/${shopItem.id}`)
      dispatch(setCurrentShopItem(shopItem))
    }
  }

  return {
    animated,
    setIndex,
    shopItemsAnimation,
    handleItemHover,
    handleSelectShopItem,
    handleAddShopItemToCart
  }
}
