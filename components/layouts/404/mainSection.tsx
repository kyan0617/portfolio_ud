import styles from '../../../styles/404Main.module.scss';
import Link from 'next/link';


export default function NotFoundMain() {

  return (
    <>
      <section className={styles.container}>
        <div className={`${styles["inner"]} _inner`}>
          <h2 className={styles.title}>お探しのページは<br className={styles.line} />見つかりませんでした。</h2>
          <p className={styles.text}>
            誠に申し訳ございませんが、アクセスいただいたページは削除されたかURLが変更されているため、見つけることができません。<br />
            お手数ですが、HOMEに戻って再度アクセスをお願いいたします。
          </p>
          <div className={styles.button}>
            <Link href={`/`} className={styles.link}>Back To Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}