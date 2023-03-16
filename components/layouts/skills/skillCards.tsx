import styles from '../../../styles/skillCards.module.scss';
import Image from 'next/legacy/image';
import skillsData from '../../../public/src/json/skills.json';
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
};

export default function skillsCards({ skills }: Props) {
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
        liList[i].style.height = `${maxHeight}px`;
      }
    }
  }, [skills]);


  return (
    <ul className={styles.cardList}>
      {skills.map((skill) => (
        <li className={styles.card} key={skill.title}>
          
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