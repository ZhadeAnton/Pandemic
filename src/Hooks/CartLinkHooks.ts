import { useHistory } from 'react-router-dom'

export default function useCartLink() {
  const history = useHistory()

  const handleClickToCart = () => {
    history.push({
      pathname: '/cart'
    })
  }

  return (
    handleClickToCart
  )
}
