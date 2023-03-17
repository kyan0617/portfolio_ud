import styles from '../../../styles/skills.module.scss';
import skillsData from '../../../public/src/json/skills.json';
import SkillCards from './skillCards';
import SkillsList from './skillsList';



export default function skillsSection() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={`${styles["inner"]} _inner`}>
            <div className={styles.title}>
              <h2 className={styles.titleText}>skills</h2>
            </div>
            <div className={styles.content}>
              <SkillCards skills={skillsData} />
              <SkillsList skills={skillsData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}