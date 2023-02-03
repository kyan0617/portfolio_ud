import styles from '../../../styles/works.module.scss';
import Image from "next/legacy/image";
import Link from 'next/link';


export default function Works() {
  return (
    <>
      <section className="container">
        <div className={styles.inner}>
          <div className={styles.title}>
            <h2 className={styles.titleText}>works</h2>
          </div>

        </div>
      </section>
    </>
  )
}

