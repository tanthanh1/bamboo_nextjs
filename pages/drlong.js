import { useState, useRef } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Doctor from "../components/doctor";
import Script from "next/script";

// function Header({title}){

//     return (<h1>{title ? title : 'Default Title '}</h1>)

// }

export default function HomePage() {
    const [showMenu, setShowMenu] = useState(false);

    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
    const [likes, setLikes] = useState(0);
    const showNavbar = useRef(false);
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
    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <>
            {showMenu ? (
                <Navbar
                    isActive={showMenu}
                    id="navbar"
                    onShow={() => setShowMenu(false)}
                />
            ) : null}

            {/* <Navbar isActive={showMenu} id="navbar"/> */}

            <div className={showMenu ? "web_wrapper transform" : "web_wrapper"}>
                {/* <div className="web_wrapper transform"> */}

                {/* <div className="web_wrapper transform"> */}

                <Header isActive={showMenu} onShow={() => setShowMenu(true)} />
                <Doctor name="LONG CHIROPRACTOR">
                    <img src="/images/drlong.jpg" alt="" />
                    <p>
                        Bắt nguồn với đam mê y học, từ năm 2017 anh Long đã học
                        tập và sử dụng Y Học Cổ Truyền để điều trị các bệnh về
                        cơ xương khớp. Anh đã tham gia các khóa đào tạo như Châm
                        cứu, Xoa bóp bấm huyệt, Phản xạ nội tạng, Thập chỉ
                        đạo... cũng như tìm hiểu và ứng dụng nhiều phương pháp
                        trị liệu của YHCT đối với khách hàng.
                    </p>
                    <p>
                        Sau đó, anh tiếp tục học chuyên sâu về cơ xương khớp,
                        đặc biệt là các khóa học của thầy Lê An - chuyên gia
                        hàng đầu trong giới Y học bằng tay hiện nay tại Việt
                        Nam. Anh đã nghiên cứu áp dụng những kĩ thuật mới của
                        những trường phái trị liệu bằng tay hiện đại trên thế
                        giới như Chiropractic, Osteopathy, Mulligan, Kinesio
                        Taping, Cranial Sacral, Muscle Energy, Applied
                        Kinesiology...
                    </p>
                    <p>
                        Với việc sử dụng Giải phẫu Sinh lý để ứng dụng vào thăm
                        khám và trang bị các phương pháp điều trị hiện đại, an
                        toàn và hiệu quả - anh đã hỗ trợ hàng trăm khách hàng
                        tìm lại niềm vui sống khỏe và giúp họ cảm thấy an tâm,
                        tự tin hơn với sức khỏe của mình. Và anh mong muốn phổ
                        biến những tinh hoa của Y học hiện đại đến với nhiều
                        người hơn để thực hiện ước mơ “Chăm sóc cơ thể người
                        Việt bằng đôi tay hiểu biết”.
                    </p>
                </Doctor>

                <Footer />
            </div>
        </>
    );
}
