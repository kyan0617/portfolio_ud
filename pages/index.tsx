import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import type { Works } from '../types/works';
import { client } from '../libs/client';
import TopSection from '../components/layouts/top/topSection'
import AboutSection from '../components/layouts/about/aboutSection'
import WorksSection from '../components/layouts/works/worksSection'
import SkillsSection from '../components/layouts/skills/skillsSection'

type Props = {
  works: Array<Works>;
}

export default function Home({ works }: Props) {
  return (
    <>
      <TopSection />
      <AboutSection />
      <WorksSection works={ works } />
      <SkillsSection />
    </>
  )
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'works'});

  return {
    props: {
      works: data.contents,
    },
  }
}