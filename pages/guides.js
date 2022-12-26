import { useContext,useEffect } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'
export default function Guides() {
const { user, authReady } = useContext(AuthContext)

    useEffect(() => {
      if (authReady) {
        fetch('/.netlify/functions/guides', user && {
          headers: {
            Authorization:  'Bearer ' + user.token.access_token
          }
        })
        .then(res => res.json())
        .then(data => console.log(data))
      }
  
    },[user, authReady])

  return (
    <Layout>
        <div className={styles.guides}>
      <h2>All Guides</h2>
    </div> 
    </Layout>
  )
}