import styles from '../../../styles/header.module.scss';
import Image from "next/legacy/image";
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.inner}>
          <h1 className={styles.logo}>
            <Link href={`/`} className={styles.link}>
              <Image src='/src/img/logo.svg' layout='responsive' objectFit='contain' alt='logo' width={283} height={127} />
            </Link>
          </h1>
        </div>
      </section>
    </>
  )
}