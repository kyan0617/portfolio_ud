import styles from '../../../styles/skillsList.module.scss';
import skillsData from '../../../public/src/json/skills.json';

type Props = {
  title: string;
};

export default function skillsList({ title }: Props) {
  return (
    <ul className={styles.list}>
      <li className={styles.item} key={title}>
        {title}
      </li>
    </ul>
  )
}