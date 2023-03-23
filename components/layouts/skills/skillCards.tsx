import styles from '../../../styles/skillCards.module.scss';
import Image from 'next/legacy/image';
import { useEffect, useRef } from 'react';

type Skill = {
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type Props = {
  skills: Skill[];
  activeSkillKey: string;
};

export default function SkillsCards({ skills, activeSkillKey }: Props) {
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let maxHeight = 0;
    const ul = ulRef.current;

    if (ul) {
      const liList = ul.querySelectorAll(`${styles["card"]}`);

      for (let i = 0; i < liList.length; i++) {
        const height = liList[i].clientHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      }

      for (let i = 0; i < liList.length; i++) {
        (liList[i] as HTMLLIElement).style.height = `${maxHeight}px`;
      }
    }
  }, [skills]);


  return (
    <ul className={styles.cardList}>
      {skills.map((skill, index) => (
        <li className={`${styles.card} ${activeSkillKey === index.toString() ? styles.isActive : ''} ${activeSkillKey === (index - 1).toString() ? styles.isActivePrev : ''}`} key={skill.title}>
          
          <div className={styles.cardImage}>
            <Image
              src={skill.image.src}
              alt={skill.image.alt}
              width={skill.image.width}
              height={skill.image.height}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{skill.title}</p>
            <p className={styles.text}>
              {skill.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}