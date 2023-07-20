import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import type { Works } from '../types/works';
import type { Blog } from '../types/blog';
import { client } from '../libs/client';
import { clientBlog } from '../libs/client';
import TopSection from '../components/layouts/top/topSection';
import AboutSection from '../components/layouts/about/aboutSection';
import WorksSection from '../components/layouts/works/worksSection';
import SkillsSection from '../components/layouts/skills/skillsSection';
import BlogSection from '../components/layouts/blog/blogSection';
import ContactSection from '../components/layouts/contact/contactSection';
import FooterSection from '../components/layouts/footer/footerSection';

// GSAP のインポート
import Gsap from 'gsap';

// ScrollTrigger のインポート
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ScrollTriggerの初期化
Gsap.registerPlugin(ScrollTrigger);
Gsap.config({
    nullTargetWarn: false,
});

type Props = {
  works: Array<Works>;
  blog: Array<Blog>;
}

export default function Home({ works, blog }: Props) {
  return (
    <>
      <TopSection />
      <AboutSection />
      <WorksSection works={ works } />
      <SkillsSection />
      <BlogSection  blog={ blog } />
      <ContactSection />
      <FooterSection />
    </>
  )
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const worksData = await client.get({ endpoint: 'works', queries: { limit: 100 }});
  const blogData = await clientBlog.get({ endpoint: 'media', queries: { limit: 100 }});

  return {
    props: {
      works: worksData.contents,
      blog: blogData.contents,
    },
  }
}