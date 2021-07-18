import { useAppDispatch } from './usePreTypedHook'
import { signOut } from '../Redux/User/UserActionCreators'

export default function useUserInformation() {
  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return {
    handleSignOut
  }
}
