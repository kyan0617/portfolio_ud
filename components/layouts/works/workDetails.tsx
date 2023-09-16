import React, {useEffect} from 'react';
import type { Works } from '../../../types/works' 
import styles from '../../../styles/workDetails.module.scss';
import Image from "next/legacy/image";
import Link from 'next/link';

// GSAP のインポート
import {gsap, Power4} from 'gsap';

type Props = {
  works: Works;
}

export default function WorkDetails({ works }: Props) {
  useEffect(() => {
    gsap.to('.js-fadeInWorksDetail', {
      opacity: 1,
      y: 0,
      ease: Power4.easeOut,
      duration: 1,
    });
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className={`${styles["inner"]} _inner`}>
          <h2 className={`${styles.heading} js-fadeInWorksDetail`}>
            {works.title}
          </h2>
          <div className={styles.box}>
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
            <div className={styles.buttons}>
              {works.worksDetails.url && (
                <div className={styles.button}>
                  <a href={works.worksDetails.url} className={`${styles["link"]} ${styles["linkRight"]}`} target='_blank' rel="noreferrer">
                    Open The Site
                  </a>
                </div>
              )}
              <div className={styles.button}>
                <Link href='/works' className={`${styles["link"]} ${styles["linkLeft"]}`}>
                  Go Back
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.topButton}>
            <Link href='/' className={styles.topLink}>
              <span className={styles.arrow}></span>
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}