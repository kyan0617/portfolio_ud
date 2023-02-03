import styles from '../../../styles/about.module.scss';
import Image from "next/legacy/image";

export default function Top() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/about_img.jpg' layout='responsive' objectFit='contain' alt='logo' width={640} height={436} />
          </div>
          <div className={styles.main}>
            <div className={styles.title}>
              <span className={styles.titleText}>about</span>
              <p className={styles.name}>Nishida Haruka</p>
            </div>
            <div className={styles.content}>
              <p className={styles.text}>
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
      </section>
    </>
  )
}