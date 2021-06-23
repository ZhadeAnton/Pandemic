import React, { useEffect } from 'react'

import './cartPage.scss'
import { useAppDispatch, useAppSelector } from '../../Hooks/PreTypedHooks'
import { removeShopItemFromCart } from '../../Redux/User/UserActionCreators'
import { getShopItemsFromCart } from '../../Redux/Shop/ShopActionCreators'

export default function CartPage() {
  const currentUser = useAppSelector((state) => state.user.currentUser!)
  const userUid = currentUser?.uid
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getShopItemsFromCart(userUid))
  }, [])

  return (
    <main className='cart-page'>
      {
        currentUser?.cart.map((shopItemId: string) => {
          return (
            <h2
              onClick={() => dispatch(removeShopItemFromCart({userUid, shopItemId}))}
              key={shopItemId}>
            </h2>
          )
        })
      }
    </main>
  )
}
