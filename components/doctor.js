import styles from '../styles/Docter.module.css'

const Doctor = ({name,children}) => {
  return (
    
    <div className={styles.content}>
        <h1>{name}</h1>

        <div className={styles.image_wrapper}>


            {children}
        </div>
    </div>
  )
}


export default Doctor