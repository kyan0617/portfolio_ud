import React, {useEffect} from 'react';
import styles from '../../../styles/about.module.scss';
import Image from "next/legacy/image";

// GSAP のインポート
import {gsap, Power4} from 'gsap';

// ScrollTrigger のインポート
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ScrollTriggerの初期化
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false,
});

export default function About() {
  useEffect(() => {
    gsap.to('.js-fadeLineToLeft', {
      opacity: 1,
      right: 0,
      ease: Power4.easeOut,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.js-fadeLineToLeft',
        start: 'top 80%',
      }
    });
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className={`${styles.inner} js-aboutTrigger`}>
          <div className={`${styles.img} js-fadeIn`}>
            <Image src='/src/img/aboutImg.jpg' layout='responsive' objectFit='contain' alt='logo' width={640} height={436} />
          </div>
          <div className={styles.main}>
            <div className={styles.title}>
              <span className={`${styles.titleText} js-fadeInTitleWrapper`}>
                <span className="js-fadeInTitle">a</span>
                <span className="js-fadeInTitle">b</span>
                <span className="js-fadeInTitle">o</span>
                <span className="js-fadeInTitle">u</span>
                <span className="js-fadeInTitle">t</span>
              </span>
              <p className={`${styles.name} js-fadeIn`}>Nishida Haruka</p>
            </div>
            <div className={`${styles.content} js-fadeIn`}>
              <p className={styles.text}>
                出身地 / 名古屋市<br />
                生年月日 / 1995年1月18日<br />
                血液型 / 不明<br />
                星座 / 山羊座<br />
                趣味 / 旅行、読書、音楽、ドラム<br />
                好きな作家さん / 有川浩さん、小川糸さん<br />
                特技 / ディズニーツムツム、イラストロジック<br />
              </p>
            </div>
          </div>
          <div className={`${styles.bottomLine} js-fadeLineToLeft`}></div>
        </div>
      </section>
    </>
  )
}