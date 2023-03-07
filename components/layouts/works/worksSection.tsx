import styles from '../../../styles/works.module.scss';
import splideStyle from '../../../styles/splide.module.scss';
import type { Works } from '../../../types/works';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'
import Image from "next/legacy/image";
import Link from 'next/link';

type Props = {
  works: Array<Works>;
}

export default function WorksSection(props: Props) {
  return (
    <>
      <section className="container">
        <div className={styles.wrapper}>
          <div className={`${styles["inner"]} _inner`}>
            <div className={styles.title}>
              <h2 className={styles.titleText}>works</h2>
            </div>
            <Splide
              area-label="Works"
              options={{
                speed: 1500,
                pagination: false,
                type: 'loop',
                lazyLoad: 'nearby',
                preloadPages: 2,
                rewind: true,
                perMove: 1,
                perPage: 3,
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
                  <SplideSlide key={work.id} className={styles.item}>
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