import Image from 'next/image'
import styles from '../styles/Articles.module.css'

import currency from '../public/images/image-currency.jpg'
import restaurant from '../public/images/image-restaurant.jpg'
import plane from '../public/images/image-plane.jpg'
import confetti from '../public/images/image-confetti.jpg'

const Articles = () => {
  return (
    <div className={styles.articles}>
        <h2 className={styles.articles_heading}>Latest Articles</h2>
        <div className={styles.articles_container}>
            <div className={styles.article}>
                <div className={styles.article_image}>
                    <Image src={currency} layout="fill"/>
                </div>
                <div className={styles.article_contents}>
                    <p className={styles.article_author}>By Claire Robinson</p>
                    <h3 className={styles.article_title}>Receive money in any currency with no fees</h3>
                    <p className={styles.article_text}>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                </div>
            </div>
            <div className={styles.article}>
                <div className={styles.article_image}>
                    <Image src={restaurant} layout="fill"/>
                </div>
                <div className={styles.article_contents}>
                    <p className={styles.article_author}>By Wilson Hutton</p>
                    <h3 className={styles.article_title}>Treat yourself without worrying about money</h3>
                    <p className={styles.article_text}>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                </div>
            </div>
            <div className={styles.article}>
                <div className={styles.article_image}>
                    <Image src={plane} layout="fill"/>
                </div>
                <div className={styles.article_contents}>
                    <p className={styles.article_author}>By Wilson Hutton</p>
                    <h3 className={styles.article_title}>Take your Easybank card wherever you go</h3>
                    <p className={styles.article_text}>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                </div>
            </div>
            <div className={styles.article}>
                <div className={styles.article_image}>
                    <Image src={confetti} layout="fill"/>
                </div>
                <div className={styles.article_contents}>
                    <p className={styles.article_author}>By Claire Robinson</p>
                    <h3 className={styles.article_title}>Our invite-only Beta accounts are now live!</h3>
                    <p className={styles.article_text}>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles