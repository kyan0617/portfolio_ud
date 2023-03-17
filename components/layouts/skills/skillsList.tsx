import styles from '../../../styles/skillsList.module.scss';
import skillsData from '../../../public/src/json/skills.json';

type Skill = {
  title: string;
};

type Props = {
  skills: Skill[];
};

export default function skillsList({ skills }: Props) {
  return (
    <ul className={styles.list}>
      {skills.map((skill) => (
        <li className={styles.item} key={skill.title}>
          {skill.title}
        </li>
      ))}
    </ul>
  )
}