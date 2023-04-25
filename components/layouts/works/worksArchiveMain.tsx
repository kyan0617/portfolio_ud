import styles from '../../../styles/worksArchiveMain.module.scss';
import type { Works } from '../../../types/works';
import Image from "next/legacy/image";
import Link from 'next/link';

type Props = {
  works: Array<Works>;
}

export default function WorksArchiveMain(props: Props) {
  return (
    <>
      <section className="section">
        <div className={styles.wrapper}>
          <div className={`${styles["inner"]} _inner`}>
            <div className={styles.top}>
              <h2 className={styles.title}>works</h2>
            </div>
            <ul className={styles.list}>
              {props.works.map((work) => (
                <li key={work.id} className={styles.item}>
                  <Link href={`/works/${work.id}`} className={styles.link}>
                      <div className={styles.img}>
                        <Image
                          src={work.worksDetails.img.url}
                          alt={work.title}
                          width={work.worksDetails.img.width}
                          height={work.worksDetails.img.height}
                          layout="responsive"
                          objectFit="cover"
                          priority={true}
                        />
                      </div>
                      <div className={styles.detail}>
                        <h3 className={styles.workTitle}>{work.title}</h3>
                        <div className={styles.button}>
                          <p className={styles.buttonText}>view more
                            <span className={styles.arrow}></span>
                          </p>
                        </div>
                      </div>
                    </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}