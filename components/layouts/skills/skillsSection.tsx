import { useState } from 'react';
import styles from '../../../styles/skills.module.scss';
import skillsData from '../../../public/src/json/skills.json';
import SkillCards from './skillCards';
import SkillsList from './skillsList';


export default function SkillsSection() {
  const [activeSkillKey, setActiveSkillKey] = useState<string>('0');

  const handleSkillItemClick = (skillKey: string) => {
    setActiveSkillKey(skillKey);
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={`${styles["inner"]} _inner`}>
            <div className={styles.title}>
              <h2 className={`${styles.titleText} js-fadeInTitleWrapper`}>
                <span className="js-fadeInTitle">s</span>
                <span className="js-fadeInTitle">k</span>
                <span className="js-fadeInTitle">i</span>
                <span className="js-fadeInTitle">l</span>
                <span className="js-fadeInTitle">l</span>
                <span className="js-fadeInTitle">s</span>
              </h2>
            </div>
            <div className={`${styles.content} js-fadeIn`}>
              <SkillCards skills={skillsData} activeSkillKey={activeSkillKey} />
              <SkillsList skills={skillsData} activeSkillKey={activeSkillKey} onSkillItemClick={handleSkillItemClick} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}