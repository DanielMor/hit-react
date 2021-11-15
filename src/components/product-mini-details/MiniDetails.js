import styles from './MiniDetails.module.css'

export const MiniDetails = ({ imageUrl, designer, name }) => (
  <div className={styles.miniDetails}>
    <img width={250} height={375} src={imageUrl} alt={name} />
    <div>
      <div className={styles.info}>
        <span>{designer}</span>
        <span>{name}</span>
      </div>
    </div>
  </div>
)

export default MiniDetails
