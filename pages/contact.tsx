import Header from '../components/layouts/header/headerSection'
import MainSection from '../components/layouts/contact/contactForm'
import FooterSection from '../components/layouts/footer/footerSection'
import styles from '../../../styles/contactPage.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <FooterSection />
    </>
  )
}