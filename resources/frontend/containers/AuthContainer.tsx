import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  useContext,
} from 'react'
import App from '../../app/App'

interface AuthContainerProps {
  auth?: App.Model.User
  isAuth: boolean
}

const AuthContext = createContext({} as AuthContainerProps)

const AuthContainer: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<App.Model.User>()
  const isAuth = useMemo(() => !!auth, [auth])

  const onAuth = () => {
    setAuth(() => App.Resources.AuthResource.profile)
  }

  useEffect(() => {
    App.Resources.AuthResource.on('auth', onAuth)

    return () => {
      App.Resources.AuthResource.off('auth', onAuth)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        auth,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContainer

export function useAuth() {
  return useContext(AuthContext)
}
