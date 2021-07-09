import { signInWithGoogle } from '../Redux/User/UserActionCreators'
import { useAppDispatch } from './PreTypedHook'

export default function useAlternativeSignInHook() {
  const dispacth = useAppDispatch()

  const handleSignInWithGoogle = () => {
    dispacth(signInWithGoogle())
  }

  const handleSignInWithFacebook = () => {
    dispacth(signInWithGoogle())
  }

  return {
    handleSignInWithGoogle,
    handleSignInWithFacebook
  }
}
