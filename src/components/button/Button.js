import classnames from 'classnames/bind'
import styles from './Button.module.css'

const cx = classnames.bind(styles)

export const Button = ({ type = 'primary', text, children, ...rest }) => (
  <button className={cx({ button: true }, type)} {...rest}>
    {text ? <span>{text}</span> : children}
  </button>
)

export default Button
