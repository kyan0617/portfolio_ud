import Head from "next/head";
import styles from '../styles/404.module.scss';
import Header from '../components/layouts/header/headerSection'
import MainSection from '../components/layouts/404/mainSection'
import FooterSection from '../components/layouts/footer/footerSection'

export default function NotFound() {
  return (
    <>
      <section className={styles.container}>
        <Head>
          <title>404 | Haruka Nishida Portfolio</title>
        </Head>
        <Header />
        <MainSection />
        <FooterSection />
      </section>
    </>
  )
}