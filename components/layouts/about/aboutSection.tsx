import styles from '../../../styles/about.module.scss';
import Image from "next/legacy/image";

export default function Top() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/src/img/aboutImg.jpg' layout='responsive' objectFit='contain' alt='logo' width={640} height={436} />
          </div>
          <div className={styles.main}>
            <div className={styles.title}>
              <span className={styles.titleText}>about</span>
              <p className={styles.name}>Nishida Haruka</p>
            </div>
            <div className={styles.content}>
              <p className={styles.text}>
                出身地 / 名古屋市<br />
                生年月日 / 1995年1月18日<br />
                血液型 / 不明<br />
                星座 / 山羊座<br />
                趣味 / 旅行、読書、音楽、ドラム<br />
                好きな作家さん / 有川浩さん、小川糸さん<br />
                特技 / ディズニーツムツム、イラストロジック<br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}