import { useEffect } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Guides.module.css'

export default function Guides() {

  useEffect(() => {
    fetch('/.netlify/functions/supermario')
      .then(res => res.json())
      .then(data => console.log(data))
  },[])

  return (
    <Layout>
        <div className={styles.guides}>
      <h2>All Guides</h2>
    </div> 
    </Layout>
  )
}