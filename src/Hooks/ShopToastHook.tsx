import React from 'react'
import toast from 'react-hot-toast'

import { IShopItem } from '../Interfaces/ShopInterfaces'

export default function useShopToast(shopItemName: IShopItem['title']) {
  const spanStyles = {
    color: '#11131c',
    fontWeight: 800,
    marginLeft: .4 + 'rem',
    marginRight: .4 + 'rem',
  }

  return toast.success(
      <div>
        You are successfully added

        <span style={spanStyles}>
          {shopItemName}
        </span>

        to the cart!
      </div>
  )
}
