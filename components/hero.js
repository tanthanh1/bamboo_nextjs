import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.section_a}>
        <h2 className={styles.title}>Tại sao chọn chúng tôi ?</h2>

        <div className={styles.section_a_grid}>

            <div className={styles.grid_item}>          
                <img src="/images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg" alt=""/>
                <p>Đội ngũ trị liệu viên chuyên nghiệp, tận tâm</p>
            </div>

            <div className={styles.grid_item}>
            
                <img src="/images/stuart-poulton-Cyw1t03KMGk-unsplash.jpg" alt=""/>          
                <p>Kỹ thuật trị liêu an toàn và hiệu quả cao</p>
            </div>
            <div className={styles.grid_item}>
            
                <img src="/images/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg" alt=""/>          
                <p>Giải quyết chính xác nguyên nhân gây bệnh</p>
            </div>
            <div className={styles.grid_item}>
            
                <img src="/images/stuart-poulton-Cyw1t03KMGk-unsplash.jpg" alt=""/> 
                <p>Tiết kiệm thời gian điều trị cho khách hàng</p>
            </div>


        </div>
    </div>
  )
}
export default Hero