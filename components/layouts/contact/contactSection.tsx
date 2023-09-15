import React, {useEffect} from 'react';
import styles from '../../../styles/contact.module.scss';
import Image from "next/legacy/image";
import Link from 'next/link';

// GSAP のインポート
import {gsap, Back} from 'gsap';

// ScrollTrigger のインポート
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ScrollTriggerの初期化
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false,
});


export default function ContactSection() {

  useEffect(() => {
    // FADE IN TITLE
    gsap.to('.js-fadeInTitle', {
      opacity: 1,
      scale: 1,
      y: 0,
      ease: Back.easeOut.config(1.7),
      stagger: { 
        amount: 1,
        from: "start",
      },
      scrollTrigger: {
        trigger: '.js-fadeInTrigger',
        start: 'top 80%',
      }
    });
  }, []);

  return (
    <>
      <section className={styles.section}>
        <div className={`${styles.wrapper} js-fadeInTrigger`}>
          <div className={`${styles.inner} _inner`}>
            <h2 className={styles.title}>
              <span className="js-fadeInTitle">c</span>
              <span className="js-fadeInTitle">o</span>
              <span className="js-fadeInTitle">n</span>
              <span className="js-fadeInTitle">t</span>
              <span className="js-fadeInTitle">a</span>
              <span className="js-fadeInTitle">c</span>
              <span className="js-fadeInTitle">t</span>
            </h2>
            <div className={styles.main}>
              <Link href="/contact" className={styles.link}>
                <div className={styles.content}>
                  <p className={styles.text}>
                    お問い合わせはこちら
                  </p>
                  <span className={styles.textHover}>
                    お問い合わせはこちら
                  </span>
                </div>
                <div className={styles.img}>
                  <Image src='/src/img/contact.svg' layout='responsive' objectFit='contain' alt='arrow' width={32} height={32} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}