import styles from "../styles/Address.module.css";

const Address = () => {
    return (
        <div className={styles.address}>
            <table>
                <tbody>
                    <tr>
                        <th>Phone:</th>
                        <th>037-915-1714</th>
                    </tr>
                    <tr>
                        <th>Zalo:</th>
                        <th>037-915-1714</th>
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <th>holisticbamboo@gmail.com</th>
                    </tr>
                    <tr>
                        <th>Địa chỉ:</th>
                        <th>170/5 Bùi Đình Tuý, p12, Bình Thạnh</th>
                    </tr>
                    <tr></tr>
                </tbody>
            </table>

            <div className={styles.googlemaps}>
            <iframe className ={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0397357011534!2d106.69856077294067!3d10.808268631155261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528be57b98129%3A0x24a737b488f056ea!2zSOG6u20gMTcwLCBQaMaw4budbmcgMTIsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1687317832231!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};
export default Address;
