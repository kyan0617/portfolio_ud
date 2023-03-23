import styles from '../../../styles/skillsList.module.scss';
import skillsData from '../../../public/src/json/skills.json';

type Skill = {
  title: string;
};

type Props = {
  skills: Skill[];
  activeSkillKey: string;
  onSkillItemClick: (key: string) => void;
};

export default function SkillsList({ skills, activeSkillKey, onSkillItemClick }: Props) {
  return (
    <ul className={styles.list}>
      {skills.map((skill, index) => (
        <li className={`${styles.item} ${activeSkillKey === index.toString() ? styles.isActive : ''}`} key={ index } onClick={() => onSkillItemClick(index.toString())}>
          {skill.title}
        </li>
      ))}
    </ul>
  )
}