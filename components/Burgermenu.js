import styles from '../styles/Burgermenu.module.css'

const Burgermenu = () => {
  return (
    <div className={styles.burgermenu}>
        <div className={styles.burgermenu_menu}>
            <nav className={styles.burgermenu_navigation}>
                <ul className={styles.burgermenu_navigation_list}>
                    <li className={styles.burgermenu_navigation_item}>
                        <a href="/" className={styles.burgermenu_navigation_link}>Home</a>
                    </li>
                    <li className={styles.burgermenu_navigation_item}>
                        <a href="/" className={styles.burgermenu_navigation_link}>About</a>
                    </li>
                    <li className={styles.burgermenu_navigation_item}>
                        <a href="/" className={styles.burgermenu_navigation_link}>Contact</a>
                    </li>
                    <li className={styles.burgermenu_navigation_item}>
                        <a href="/" className={styles.burgermenu_navigation_link}>Blog</a>
                    </li>
                    <li className={styles.burgermenu_navigation_item}>
                        <a href="/" className={styles.burgermenu_navigation_link}>Careers</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Burgermenu