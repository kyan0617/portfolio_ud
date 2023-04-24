import type { Works } from '../../../types/works' 
import styles from '../../../styles/workDetails.module.scss';
import Image from "next/legacy/image";

type Props = {
  works: Works;
}

export default function WorkDetails({ works }: Props) {
  return (
    <>
      <section className={styles.container}>
        <div className={`${styles["inner"]} _inner`}>
          <h2 className={styles.heading}>
            {works.title}
          </h2>
          <div className={styles.img}>
            <Image
              src={works.worksDetails.img.url}
              alt={works.title}
              width={works.worksDetails.img.width}
              height={works.worksDetails.img.height}
              layout="responsive"
              objectFit="contain"
              data-splide-lazy={works.worksDetails.img.url}
              priority={true}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.unit}>
              <h3 className={styles.title}>
                Range Of Responsibility
              </h3>
              <p className={styles.text}>
                {works.worksDetails.range}
              </p>
            </div>
            {works.worksDetails.tool && (
              <div className={styles.unit}>
                <h3 className={styles.title}>
                  CMS
                </h3>
                <p className={styles.text}>
                  {works.worksDetails.tool}
                </p>
              </div>
            )}
          </div>
          {works.worksDetails.url && (
            <div className={styles.button}>
              <a href={works.worksDetails.url} className={styles.link} target='_blank' rel="noreferrer">
                Go To Site
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  )
}