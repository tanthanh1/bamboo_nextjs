import styles from '../styles/Header.module.css'
// import {FaBars} from 'react-icons/fa'
import { FaTimes,FaBars } from "react-icons/fa";
import {useState} from 'react'


import Link from 'next/link'

const header = ({isActive,onShow,home=false}) => {


  return (
    <>
    {!home ?
      ( <header className={styles.header}>
        <div className={styles.header_inner}>
            <div className={styles.logo}>
                <Link href="/">BAMBOO HEALTHCARE</Link>
            </div>
    
            <div className={styles.hamburger} onClick={onShow}>
                {isActive ?
                <FaTimes className={styles.fa}/> :
                <FaBars className={styles.fa}/>   
                }    
    
            </div>
        </div>
        </header>) :
      (<header className={`${styles.header} ${styles.home_page}`}>
        <div className={styles.header_inner}>
            <div className={styles.logo}>
                <Link href="/">BAMBOO HEALTHCARE</Link>
            </div>
    
            <div className={styles.hamburger} onClick={onShow}>
                {isActive ?
                <FaTimes className={styles.fa}/> :
                <FaBars className={styles.fa}/>   
                }    
    
            </div>
            
        </div>
        <div className={styles.hero}>
                <h1>chăm sóc bạn bằng đôi tay hiểu biết</h1>
                  <p>Bạn xứng đáng được sống một cuộc sống sôi động, không đau đớn và chúng tôi ở đây để giúp bạn biến điều đó thành hiện thực! <strong>Chiropractic</strong> là một cách an toàn, không xâm lấn và tự nhiên để giúp bạn đạt được sức khỏe tối ưu cho cá nhân mình.</p>                  
                {/* <a href="#!">ĐẶT LỊCH →</a> */}
       </div>
  
        <div className={styles.overlay}></div>
        </header>)
      
    }


    </>
    
  )
}
export default header