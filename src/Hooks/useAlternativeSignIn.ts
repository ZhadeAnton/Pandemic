import { signInWithGoogle } from '../Redux/User/UserActionCreators'
import { useAppDispatch } from './usePreTypedHook'

export default function useAlternativeSignIn() {
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
