import styles from '../../../styles/works.module.scss';
import Image from 'next/legacy/image';
import skillsData from '../../../public/src/json/skills.json';

export default function skillsSection() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={`${styles["inner"]} _inner`}>
            <div className={styles.title}>
              <h2 className={styles.titleText}>skills</h2>
            </div>
            <ul className={styles.cardList}>
              <li className={styles.card}>
                <div className={styles.cardImage}>
                  <img src="" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}