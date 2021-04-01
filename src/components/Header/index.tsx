import styles from './styles.module.scss'

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo Ig.news"/>
        <nav>
          <a href="http://" className={styles.active}>Home</a>
          <a href="http://">News</a>
        </nav>
      </div>
    </header>
  )
}