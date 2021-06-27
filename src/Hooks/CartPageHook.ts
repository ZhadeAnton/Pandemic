import * as cartActions from '../Redux/Cart/CartActionCreators'
import { useAppDispatch } from './PreTypedHooks'
import {
  IFnDecreaseQuantity,
  IFnIncreaseQuantity,
  IFnRemoveItem
} from '../Interfaces/ShopInterfaces'

export default function useCartPage() {
  const dispatch = useAppDispatch()

  const handleRemoveItem: IFnRemoveItem = (userUid, shopItemId, quantity) => {
    dispatch(cartActions.removeShopItemFromCart({userUid, shopItemId, quantity}))
  }

  const handleIncreaseQuantity: IFnIncreaseQuantity = (shopItem) => {
    dispatch(cartActions.increaseQuantity(shopItem))
  }

  const handleDecreaseQuantity: IFnDecreaseQuantity = (shopItem) => {
    dispatch(cartActions.decreaseQuantity(shopItem))
  }

  return {
    handleRemoveItem, handleIncreaseQuantity, handleDecreaseQuantity
  }
}
