import styles from '../../../styles/footer.module.scss';

export default function Footer() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.inner}>
          <span className={styles.copyright}>
            &copy;2023 Nishida Haruka
          </span>
        </div>
      </section>
    </>
  )
}