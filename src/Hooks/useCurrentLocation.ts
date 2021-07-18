import { useLocation } from 'react-router-dom'

export default function useCurrentLocation() {
  const location = useLocation()
  const currentLocation = location.pathname.slice(1)

  return (
    currentLocation
  )
}
