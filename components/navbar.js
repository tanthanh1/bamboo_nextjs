import styles from '../styles/Navbar.module.css'
import {useEffect,useRef} from 'react'


const Navbar = ({isActive, onShow}) => {
    // console.log('isActive', isActive)
    const ref= useRef(null)
    // console.log('isActive 2', isActive)
    // console.log(ref.current)

    useEffect(()=>{
        const handleClick=(e)=>{
            if ( isActive && ref.current && !ref.current.contains(e.target))
            {
                console.log('isActive 2', isActive)
                console.log('click outside')
                onShow()
            }    
            
        }
        document.addEventListener('mousedown',handleClick)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClick);
          };
    },[ref])

    // console.log(`${style} ${styles.nav_menu}`)
   
    // console.log(`styles.${style} ${styles.nav_menu}`)
  return (
    <div ref={ref} className={styles.nav_menu}>

    {/* <div ref={ref} className={isActive ? styles.nav_menu : `${styles.hidden} ${styles.nav_menu}`} id="nav-menu"> */}
    <ul>
        <li><a href="/">TRANG CHỦ</a></li>
        <li><a href="/drlong">VỀ DR LONG</a></li>
        <li><a href="/drdat">VỀ DR DAT</a></li>
        <li><a href="/datlich">ĐẶT KHÁM</a></li>           
    </ul>
    </div>
  )
}
export default Navbar