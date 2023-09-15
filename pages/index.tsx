import Head from "next/head";
import React, {useEffect} from 'react';
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
import {gsap, Power4, Back} from 'gsap';

// ScrollTrigger のインポート
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ScrollTriggerの初期化
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false,
});

type Props = {
  works: Array<Works>;
  blog: Array<Blog>;
}

export default function Home({ works, blog }: Props) {
  useEffect(() => {
    // FADE IN TO TOP
    const fadeInItem = document.querySelectorAll('.js-fadeIn');
    fadeInItem.forEach(el => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        ease: Power4.easeOut,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
        }
      });
    });

    // FADE IN TITLE
    const fadeInTitleTrigger = document.querySelectorAll('.js-fadeInTitleWrapper');
    fadeInTitleTrigger.forEach(triggerEl => {
      const TitleItem = triggerEl.querySelectorAll('.js-fadeInTitle');

      gsap.to(TitleItem, {
        opacity: 1,
        scale: 1,
        x: 0,
        ease: Back.easeOut.config(1.7),
        stagger: { 
          amount: 0.5,
          from: "start",
        },
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top 70%',
        }
      });
    })
  }, []);

  return (
    <>
      <Head>
        <title>Haruka Nishida Portfolio</title>
      </Head>
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