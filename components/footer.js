import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footer_inner}>               
            <p className={styles.email}>holisticbamboo@gmail.com</p>

            <h2 className={styles.office_hours}>GIỜ LÀM VIỆC:</h2>
            <div className={styles.open_day}>

                <table>
                <tbody>
                    <tr>
                      <th>THỨ HAI:</th>
                      <th>9AM-17PM</th>
                    </tr>
                    <tr>
                      <th>THỨ BA:</th>
                      <th>9AM-17PM</th>
                    </tr>
                    <tr>
                      <th>THỨ TƯ:</th>
                      <th>9AM-17PM</th>
                    </tr>
                    <tr>
                      <th>THỨ NĂM:</th>
                      <th>9AM-17PM</th>
                    </tr>
                    <tr>
                      <th>THỨ SÁU:</th>
                      <th>9AM-17PM</th>
                    </tr>
                    <tr>
                      <th>THỨ BẢY:</th>
                      <th>CLOSED</th>
                    </tr>
                    <tr>
                      <th>CHỦ NHẬT:</th>
                      <th>CLOSED</th>
                    </tr>
                    </tbody>
                  </table>

            </div>
    
            <p className={styles.address} >Địa chỉ:&nbsp; &nbsp; &nbsp;170/5 Bùi Đình Tuý, p12, Bình Thạnh</p>
            
            <div className={styles.hr}></div>
    
            <div className={styles.contact}>
                <p>Contact info:   </p>
                <p>phone:  037-915-1714</p>
                <p>email:  holisticbamboo@gmail.com</p>
            </div>              
    </div>

</footer>
  )
}
export default Footer