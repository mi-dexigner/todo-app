import React from 'react'
import styles from '../styles/Footer.module.css'
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })
const Footer = () => {
  return (
    <footer className={` ${styles.Footer} ${montserrat.className}`}>
        <div className='container'>
            <div className='row'>
                <p>&copy; {new Date().getFullYear()}. All Right Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer