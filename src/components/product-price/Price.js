import styles from './Price.module.css'

export const Price = ({ value, currency, discount }) => (
  <div className={styles.container}>
    <div className={styles.price}>
      <span>
        {value} {currency}
      </span>
    </div>
    {discount && (
      <div className={styles.discount}>
        <span>
          {discount.value} {currency}
        </span>
        <span>{discount.amount}% off</span>
      </div>
    )}
  </div>
)

export default Price
