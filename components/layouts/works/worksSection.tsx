import styles from '../../../styles/works.module.scss';
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
        <div className={styles.inner}>
          <div className={styles.title}>
            <h2 className={styles.titleText}>works</h2>
          </div>
          <ul>
          <Splide
            area-label="Works"
            options={{
              autoplay: true,
              interval: 3000,
            }}
            >
              {props.works.map((work) => (
                <li key={work.id}>
                  <Link href={`/works/${work.id}`}>
                    <div className={styles.img}>
                      <Image
                        src={work.worksDetails.img.url}
                        alt={work.title}
                        width={work.worksDetails.img.width}
                        height={work.worksDetails.img.height}
                        layout="responsive"
                        objectFit="cover"
                        />
                    </div>
                    <h3 className={styles.workTitle}>{work.title}</h3>

                  </Link>
                </li>
              ))}
            </Splide>
          </ul>
        </div>
      </section>
    </>
  )
}