import styles from '../../../styles/works.module.scss';
import Image from "next/legacy/image";
import Link from 'next/link';

export default function WorksSection(props: any) {
  return (
    <>
      <section className="container">
        <div className={styles.inner}>
          <div className={styles.title}>
            <h2 className={styles.titleText}>works</h2>
          </div>
          <ul>
            {props.works.map((work: any) => (
              <li key={work.id}>
                <Link href={`/works/${work.id}`}>
                  {work.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}