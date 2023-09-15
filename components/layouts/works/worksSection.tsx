import React, {useEffect} from 'react';
import styles from '../../../styles/works.module.scss';
import splideStyle from '../../../styles/splide.module.scss';
import type { Works } from '../../../types/works';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'
import Image from "next/legacy/image";
import Link from 'next/link';

// GSAP のインポート
import {gsap, Power4} from 'gsap';

// ScrollTrigger のインポート
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ScrollTriggerの初期化
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false,
});

type Props = {
  works: Array<Works>;
}

export default function WorksSection(props: Props) {
  useEffect(() => {
    gsap.to('.js-fadeInWorks' , {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: '.js-fadeInWorksTrigger',
        start: 'top 70%',
      },
      stagger: { 
        each: 0.1,
        from: "start",
      }
    });
  }, []);

  return (
    <>
      <section className="section">
        <div className={styles.wrapper}>
          <div className={`${styles["inner"]} _inner js-fadeInWorksTrigger`}>
            <div className={styles.top}>
              <h2 className={`${styles.title} js-fadeInTitleWrapper`}>
                <span className="js-fadeInTitle">w</span>
                <span className="js-fadeInTitle">o</span>
                <span className="js-fadeInTitle">r</span>
                <span className="js-fadeInTitle">k</span>
                <span className="js-fadeInTitle">s</span>
              </h2>
              <div className={styles.right}>
                <Link href='/works' className={styles.moreLink}>
                  <p className={styles.moreLinkText}>view all</p>
                  <div className={styles.button}>
                    <span className={styles.buttonImage}>
                      <Image src='/src/img/arrow_black.svg' layout='responsive' objectFit='contain' alt='arrow' width={16} height={14} />
                    </span>
                    <span className={styles.buttonImageHover}>
                      <Image src='/src/img/arrow_white.svg' layout='responsive' objectFit='contain' alt='arrow' width={16} height={14} />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <Splide
              area-label="Works"
              options={{
                speed: 1500,
                pagination: false,
                type: 'loop',
                lazyLoad: 'nearby',
                preloadPages: 3,
                rewind: true,
                perMove: 1,
                perPage: 3,
                gap: '2.4rem',
                breakpoints: {
                  540: {
                    perMove: 1,
                    perPage: 1,
                  },
                  768: {
                    perMove: 2,
                    perPage: 2,
                  }
                },
              }}
              >
                {props.works.map((work) => (
                  <SplideSlide key={work.id} className={`${styles.item} js-fadeInWorks`}>
                    <Link href={`/works/${work.id}`} className={styles.link}>
                      <div className={styles.img}>
                        <Image
                          src={work.worksDetails.img.url}
                          alt={work.title}
                          width={work.worksDetails.img.width}
                          height={work.worksDetails.img.height}
                          layout="responsive"
                          objectFit="cover"
                          data-splide-lazy={work.worksDetails.img.url}
                          priority={true}
                        />
                      </div>
                      <h3 className={styles.workTitle}>{work.title}</h3>
                    </Link>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </section>
    </>
  )
}