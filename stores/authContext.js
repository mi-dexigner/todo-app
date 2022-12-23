import { createContext, useState,useEffect } from "react";
import netlifyIdentity from 'netlify-identity-widget'
const AuthContext = createContext({
    user:null,
    login:()=>{},
    register:()=>{},
    logout:()=>{},
    authReady:false
});

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [authReady, setAuthReady] = useState(false)
    
    useEffect(() => {
        netlifyIdentity.on('login', (user) => {
            setUser(user)
            netlifyIdentity.close()
            console.log('login event')
          })

          netlifyIdentity.on('logout', () => {
            setUser(null)
            console.log('logout event')
          })
          
   // init netlify identity connection
   netlifyIdentity.on('init', (user) => {
    setUser(user)
    setAuthReady(true)
    console.log('init event')
  })
    return () => {
        netlifyIdentity.off('login')
        netlifyIdentity.off('signup')
        netlifyIdentity.off('logout')
      }

    }, [])

    const login = () => {
        netlifyIdentity.open('login')
      }
      const logout = () => {
        netlifyIdentity.logout()
      }
    const register = () => {
        netlifyIdentity.open('signup')
      }
      const context = {user, login, logout,register, authReady}
    
    return(
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    )
}

export default AuthContext;