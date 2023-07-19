import styles from '../../../styles/contact.module.scss';
import Image from "next/legacy/image";
import Link from 'next/link';


export default function ContactSection() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={`${styles.inner} _inner`}>
            <h2 className={styles.title}>
              contact
            </h2>
            <div className={styles.main}>
              <Link href="/contact" className={styles.link}>
                <div className={styles.content}>
                  <p className={styles.text}>
                    お問い合わせはこちら
                  </p>
                  <span className={styles.textHover}>
                    お問い合わせはこちら
                  </span>
                </div>
                <div className={styles.img}>
                  <Image src='/src/img/contact.svg' layout='responsive' objectFit='contain' alt='arrow' width={32} height={32} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}