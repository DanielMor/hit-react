import styles from './Details.module.css'

export const Details = ({ designer, name }) => (
  <div className={styles.details}>
    <h1>{designer}</h1>
    <p>{name}</p>
  </div>
)

export default Details
