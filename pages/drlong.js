import {useState,useRef} from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Doctor from '../components/doctor'
import Script from 'next/script'




// function Header({title}){
   
//     return (<h1>{title ? title : 'Default Title '}</h1>)

// }


export default  function HomePage(){

    const [showMenu, setShowMenu]= useState(false)   

    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes,setLikes] =useState(0)  
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
            <Doctor name="LONG CHIROPRACTOR">
                <img
                    src="/images/drlong.jpg"
                    alt=""
                />
                <p>
                Bắt nguồn với đam mê y học, từ năm 2017 Chiropractor Long đã học tập và sử dụng Y Học Cổ Truyền để điều trị các bệnh về cơ xương khớp. Anh đã tham gia các khóa đào tạo như Châm cứu, Xoa bóp bấm huyệt, Phản xạ nội tạng, Thập chỉ đạo... cũng như tìm hiểu và ứng dụng nhiều phương pháp trị liệu của YHCT đối với khách hàng.
                </p>
                <p>Sau đó, anh tiếp tục tìm hiểu và đăng kí tham gia các khóa học chuyên sâu về cơ xương khớp, đặc biệt là các khóa học của thầy Lê An - chuyên gia hàng đầu trong giới Y học bằng tay hiện nay tại Việt Nam. Sau nhiều năm học tập và áp dụng những kĩ thuật mới của những trường phái trị liệu bằng tay hiện đại trên thế giới như Chiropractic, Osteopathy, Mulligan, Kinesio Taping, Cranial Sacral, Applied Kinesiology... hiện anh mong muốn đem những tinh hoa của Y học hiện đại đến với nhiều người hơn để thực hiện ước mơ “Chăm sóc cơ thể người Việt bằng đôi tay hiểu biết”. </p>
                <p>Anh Long đảm nhận vai trò chuyên viên trị liệu Cơ Xương Khớp, bao gồm thăm khám, chẩn đoán, tư vấn và thực hiện điều trị cho khách hàng. Một số vấn đề của khách hàng anh thường gặp như: thoát hoá đốt sống, viêm khớp, đau mỏi cổ vai gáy, thắt lưng, chấn thương thể thao...                     
                </p>
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




