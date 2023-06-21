
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import {useState,useRef} from 'react'
import Hero from '../components/hero'




export default  function HomePage(){
    

    const [showMenu, setShowMenu]= useState(false)   

    const showNavbar = useRef(false) 


    return (
        <>
            {showMenu ? <Navbar isActive={showMenu} id="navbar" onShow={()=>setShowMenu(false)}/> : null}

            <div className={showMenu ? "web_wrapper transform": "web_wrapper"  }>
                <Header isActive= {showMenu} home onShow={()=>setShowMenu(true)}/>
                <Hero/>
                <Footer />           
             </div>
        </>
    )
}




