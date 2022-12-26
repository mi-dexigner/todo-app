import Link from 'next/link';
import React, { useContext } from 'react'
import styles from '../styles/Header.module.css'
import { Montserrat } from '@next/font/google';
import AuthContext from '../stores/authContext';

const montserrat = Montserrat({ subsets: ['latin'] })
const Header = () => {
  const {user,login,register,logout } = useContext(AuthContext);
  return (
    <header className={`${styles.Header} ${montserrat.className}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-2'>TodoApp</div>
                <div className='col-9'>
                  {/* {authReady &&( */}
                  <nav>
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      {user && <li><Link href="">Dashboard</Link></li>}
                      {!user && <li  onClick={register} className={styles.btn}>Register</li>}
                      {!user && <li onClick={login} className={styles.btn}>Login</li>}
                      {user  &&<li onClick={logout} className={styles.btn}>Logout</li>}
                    </ul>
                  </nav>
                  {/* )} */}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header