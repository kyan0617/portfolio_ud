import { useState } from 'react';
import styles from '../../../styles/skills.module.scss';
import skillsData from '../../../public/src/json/skills.json';
import SkillCards from './skillCards';
import SkillsList from './skillsList';


export default function SkillsSection() {
  const [activeSkillKey, setActiveSkillKey] = useState<string>('0');

  const handleSkillItemClick = (skillKey: string) => {
    console.log(`Skill ${skillKey} was clicked!`);
    setActiveSkillKey(skillKey);
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={`${styles["inner"]} _inner`}>
            <div className={styles.title}>
              <h2 className={styles.titleText}>skills</h2>
            </div>
            <div className={styles.content}>
              <SkillCards skills={skillsData} activeSkillKey={activeSkillKey} />
              <SkillsList skills={skillsData} activeSkillKey={activeSkillKey} onSkillItemClick={handleSkillItemClick} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}