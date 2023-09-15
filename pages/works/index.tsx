import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { client } from '../../libs/client';
import type { Works } from '../../types/works';
import Header from '../../components/layouts/header/headerSection'
import MainSection from '../../components/layouts/works/worksArchiveMain'
import ContactSection from '../../components/layouts/contact/contactSection'
import FooterSection from '../../components/layouts/footer/footerSection'

type Props = {
  works: Array<Works>;
}

export default function Home({ works }: Props) {
  return (
    <>
      <Header />
      <MainSection works={ works } />
      <ContactSection />
      <FooterSection />
    </>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const worksData = await client.get({ endpoint: 'works', queries: { limit: 100 }});

  return {
    props: {
      works: worksData.contents,
    },
  }
}