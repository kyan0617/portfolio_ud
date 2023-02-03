import styles from '../../../styles/top.module.scss';
import Image from "next/legacy/image";

export default function Top() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.title}>
            <span className={styles.large}>thanks for visiting</span>
            <span className={styles.small}>my portfolio</span>
          </div>
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.left}>
                <div className={styles.img}>
                  <Image src='/logo.svg' layout='responsive' objectFit='contain' alt='logo' width={283} height={127} />
                </div>
                <div className={styles.leftTitle}>
                  <span className={styles.leftTitleText}>portfolio</span>
                </div>
              </div>
              <div className={styles.right}>
                <p className={styles.name}>西田遥香</p>
                <span className={styles.nameEnglish}>Haruka Nishida</span>
                <p className={styles.rightTitle}>WEB Coder</p>
                <div className={styles.rightContent}>
                  <p className={styles.rightText}>
                    ご覧いただきありがとうございます。<br />
                    愛知県名古屋市を拠点にフリーランスで活動している西田遥香と申します。<br />
                    Shopify構築をメインに、WEB制作のお仕事をしております。<br />
                    前職では、ECサイトの立ち上げから運営までを経験いたしました。<br />
                    <br />
                    丁寧かつ円滑なコミュニケーションを取り、しっかりとご希望に沿ったものを提供できるよう心を込めてお仕事いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}