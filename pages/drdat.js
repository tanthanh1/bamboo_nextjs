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
            <Doctor name="DAT CHIROPRACTOR">
                <img src="/images/dat.jpg" alt="" />
                <p>-	Cử nhân HLTT trường ĐH TDTT TP.HCM<br />
-	Thạc sĩ GDTC trường ĐH TDTT TP.HCM<br />
-	Y sĩ YHCT trường Trung cấp Y dược Vạn Hạnh<br />
-	Kinh nghiệm trên 5 năm nghề trị liệu
</p>
                <p>Với lợi thế nền tảng kiến thức về y học TDTT, vận động học TDTT và y học cổ truyền cộng với niềm đam mê trong việc mang lại sức khoẻ cho mọi người bằng những phương pháp trị liệu tự nhiên hiệu quả nhất, giúp mọi người có được chất lượng cuộc sống tốt nhất đã tạo động lực rất lớn cho tôi vững bước trên con đường tìm tòi học hỏi để hoàn thiện mình hơn trên con đường trị liệu tự nhiên. </p>
                <p>Bén duyên với trị liệu từ năm 2017, sau nhiều năm mày mò, may mắn được tiếp cận với những kiến thức, phương pháp trị liệu tự nhiên hiện đại nhất hiện nay trên thế giới như: Chiropractic (trị liệu thần kinh cột sống), Mulligan, Gonstead, Kinesiology, Kinesio Tape,… mang lại hiệu quả cao trong việc trị liệu các chứng bệnh liên quan đến sai lệch cấu trúc cơ thể như: mất cân bằng tư thế, đau mỏi cổ vai gáy, thắt lưng, đau đầu/nửa đầu, mất ngủ, thoát vị đĩa đệm, trật khớp, lệch đốt sống, chấn thương thể thao, hồi phục sau tập luyện…</p>
                <p>Luôn tối ưu hoá việc trị liệu bằng cách tìm ra gốc bệnh, ưu tiên áp dụng các phương pháp trị liệu tự nhiên an toàn, hiệu quả nhất. Với sự nỗ lực hết mình trong mỗi buổi trị liệu tôi luôn tin tưởng sẽ mang đến cho khách hàng những trải nghiệm tốt nhất, giúp cơ thể phục hồi nhanh nhất giúp khách hàng tối ưu được chất lượng cuộc sống của mình.</p>

      
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




