import React, {useEffect} from 'react';
import styles from '../../../styles/top.module.scss';
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

export default function Top() {
  // レイアウト作成後の動作
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to('.js-columnLineToBottom', {
      height: '58.2rem',
      ease: Power4.easeOut,
      duration: 3,
    });
    timeline.to('.js-columnLineToTop', {
      bottom: 'auto',
      top: '-8%',
      ease: Power4.easeOut,
      duration: 3,
    },"<");
    timeline.to('.js-RowLine', {
      width: '58.2rem',
      ease: Power4.easeOut,
      duration: 3,
    },"<");
    timeline.to('.js-fadeInTopMain', {
      opacity: 1,
      y: 0,
      ease: Power4.easeOut,
      duration: 2,
    }, '<2');
    timeline.to('.js-fadeInTopTitle', {
      opacity: 1,
      y: 0,
      ease: Power4.easeOut,
      duration: 2,
    }, '<');
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.inner}>
          <span className={`${styles["dashedColumnLine"]} js-columnLineToBottom`}></span>
          <span className={`${styles["dashedRowLine"]} js-RowLine`}></span>
          <div className={`${styles.title} js-fadeInTopTitle`}>
            <span className={styles.large}>thanks for visiting</span>
            <span className={styles.small}>my portfolio</span>
          </div>
          <div className={styles.card}>
            <span className={`${styles["cardDashedLine"]} js-columnLineToTop`}></span>
            <div className={`${styles.cardInner} js-fadeInTopMain`}>
              <div className={styles.left}>
                <div className={styles.img}>
                  <Image src='/src/img/logo.svg' layout='responsive' objectFit='contain' alt='logo' width={283} height={127} />
                </div>
                <div className={styles.leftTitle}>
                  <span className={styles.leftTitleText}>portfolio</span>
                </div>
              </div>
              <div className={styles.right}>
                <p className={styles.name}>西田遥香</p>
                <span className={styles.nameEnglish}>Haruka Nishida</span>
                <p className={styles.rightTitle}>WEB Coder</p>
                <div className={styles.rightContent}>
                  <p className={styles.rightText}>
                    ご覧いただきありがとうございます！<br />
                    愛知県名古屋市を拠点にフリーランスで活動している西田遥香と申します。<br />
                    <br />
                    Liquidを使用したShopify構築やWordPressのオリジナルテーマ制作などをメインにWEBコーダーのお仕事をしております。<br />
                    <br />
                    最近では、Next.jsなどのフレームワークにも興味を持ち、学習を進めているところです。<br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}