import styles from '../../../styles/skillCards.module.scss';
import Image from 'next/legacy/image';
import skillsData from '../../../public/src/json/skills.json';

type Props = {
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export default function skillsCards({ title, text, image }: Props) {
  return (
    <ul className={styles.cardList}>
      <li className={styles.card} key={title}>
        <div className={styles.cardImage}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>
            {text}
          </p>
        </div>
      </li>
    </ul>
  )
}