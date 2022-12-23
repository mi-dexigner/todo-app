import { AuthContextProvider } from '../stores/authContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <AuthContextProvider>
  <Component {...pageProps} />
  </AuthContextProvider>
  )
}
