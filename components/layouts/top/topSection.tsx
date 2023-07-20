import styles from '../../../styles/top.module.scss';
import Image from "next/legacy/image";

export default function Top() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.inner}>
          <span className={`${styles["dashedColumnLine"]} js-columnLine`}></span>
          <span className={`${styles["dashedRowLine"]} js-RowLine`}></span>
          <div className={styles.title}>
            <span className={styles.large}>thanks for visiting</span>
            <span className={styles.small}>my portfolio</span>
          </div>
          <div className={styles.card}>
            <span className={`${styles["cardDashedLine"]} js-columnLine`}></span>
            <div className={styles.cardInner}>
              <div className={styles.left}>
                <div className={styles.img}>
                  <Image src='/src/img/logo.svg' layout='responsive' objectFit='contain' alt='logo' width={283} height={127} />
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
                    ご覧いただきありがとうございます！<br />
                    愛知県名古屋市を拠点にフリーランスで活動している西田遥香と申します。<br />
                    <br />
                    Liquidを使用したShopify構築やWordPressのオリジナルテーマ制作などをメインにWEBコーダーのお仕事をしております。<br />
                    <br />
                    最近では、Next.jsなどのフレームワークにも興味を持ち、学習を進めているところです。<br />
                    <br />
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