import {useState,useRef} from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Doctor from '../components/doctor'
import Address from '../components/address'
import Script from 'next/script'




// function Header({title}){
   
//     return (<h1>{title ? title : 'Default Title '}</h1>)

// }


export default  function DatLich(){

    const [showMenu, setShowMenu]= useState(false)   

    const showNavbar = useRef(false) 
    // console.log('shownav',showNavbar.current)
    // showNavbar.current=true
    // console.log('shownav2',showNavbar.current)
    // const navbar= document.getElementById('navbar')
    // document.addEventListener('click', (event)=>{
    //     if(showMenu  && !event.target.isEqualNode(navbar) && !navbar.contains(event.target) ){
    //         console.log('Dang co menu')
    //         setShowMenu(false)
    //     }      
    // })
    function handleClick(){
        setLikes(likes+1)
    }

    return (

        <>
            
            {showMenu ? <Navbar isActive={showMenu} id="navbar" onShow={()=>setShowMenu(false)}/> : null}

            {/* <Navbar isActive={showMenu} id="navbar"/> */}

            <div className={showMenu ? "web_wrapper transform": "web_wrapper"  }>
            {/* <div className="web_wrapper transform"> */}

             
            {/* <div className="web_wrapper transform"> */}
            
            <Header isActive= {showMenu} onShow={()=>setShowMenu(true)}/>
            <Doctor name="LIÊN HỆ CHÚNG TÔI:">


            <Address/>   
            
           
            </Doctor> 
            
            {/* <ul>
                {names.map((name)=>(
                    <li key={name}>{name}</li>                        
                ))}
            </ul> */}         
            <Footer />
            </div>

        </>
    )
}




