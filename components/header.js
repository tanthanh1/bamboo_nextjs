import styles from '../styles/Header.module.css'
// import {FaBars} from 'react-icons/fa'
import { FaTimes,FaBars } from "react-icons/fa";
import {useState} from 'react'


import Link from 'next/link'

const header = ({isActive,onShow}) => {


  return (
    <header className={styles.header}>
    <div className={styles.header_inner}>
        <div className={styles.logo}>
            <Link href="/">BAMBOO HEALTHCARE</Link>
        </div>

        <div className={styles.hambuger} onClick={onShow}>
            {isActive ?
            <FaTimes className={styles.fa}/> :
            <FaBars className={styles.fa}/>       
            }                      
            {/* <FaXmark className={styles.fa}/> */}
  
            {/* <i className={styles.fa-solid fa-xmark hidden} id="close"></i> */}
            {/* <i className={styles.fa-sharp fa-solid fa-bars} id="open"></i> */}
        </div>
    </div>
    </header>
  )
}
export default header