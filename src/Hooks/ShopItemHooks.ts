import { useHistory } from 'react-router-dom'
import { useAppDispatch } from './PreTypedHooks'
import { IShopItem } from '../Interfaces/ShopInterfaces'
import { setCurrentShopItem } from '../Redux/Shop/ShopActionCreators'

export default function useSelectShopItem() {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const handleSelectShopItem = (shopItem: IShopItem) => {
    history.push({
      pathname: `/shop/${shopItem.id}`
    });

    dispatch(setCurrentShopItem(shopItem))
  }

  return {
    handleSelectShopItem
  }
}

