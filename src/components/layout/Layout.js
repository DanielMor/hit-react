import SEOHead from 'components/seo-head'
import styles from './Layout.module.css'

export const Layout = ({ seo = {}, children }) => (
  <div className={styles.container}>
    <SEOHead pageTitle="HumanIT - React" {...seo} />

    <main className={styles.main}>{children}</main>
  </div>
)

export default Layout
