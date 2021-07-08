import { useAppDispatch } from './PreTypedHook'
import { signOut } from '../Redux/User/UserActionCreators'

export default function useUserInformationHook() {
  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return {
    handleSignOut
  }
}
