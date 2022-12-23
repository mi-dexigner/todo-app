import Link from 'next/link'
import React, { useContext } from 'react'
import styles from '../styles/Header.module.css'
import { Montserrat } from '@next/font/google';
import AuthContext from '../stores/authContext';

const montserrat = Montserrat({ subsets: ['latin'] })
const Header = () => {
  const {user,login} = useContext(AuthContext);
  console.log(user);
  return (
    <header className={`${styles.Header} ${montserrat.className}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-2'>TodoApp</div>
                <div className='col-9'>
                  <nav>
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="">Dashboard</Link></li>
                      <li><a onClick={login}>Login</a></li>
                      <li><Link href="">Register</Link></li>
                    </ul>
                  </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header