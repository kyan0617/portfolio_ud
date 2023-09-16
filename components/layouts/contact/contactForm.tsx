import React, {useEffect} from 'react';
import { useState } from 'react';
import styles from '../../../styles/contactForm.module.scss';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";

// GSAP のインポート
import {gsap, Back} from 'gsap';

type FormValues = {
  company: string;
  fullName: string;
  email: string;
  message: string;
}


export default function WorkDetails() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  const sendForm = async (event: any) => {
    // event.preventDefault();
console.log(event);
    const res = await fetch('api/contact', {
      body: JSON.stringify({
        company: event.company,
        name: event.name,
        email: event.email,
        message: event.message
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    if (res.ok) {
      console.log('送信完了！');
    };
  }

  useEffect(() => {
    // FADE IN TITLE
    gsap.to('.js-fadeInTitle', {
      opacity: 1,
      scale: 1,
      x: 0,
      ease: Back.easeOut.config(1.7),
      stagger: { 
        amount: 0.5,
        from: "start",
      }
    });
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className={`${styles["inner"]} _inner`}>
          <div className={styles.heading}>
            <span className={styles.headingEn}>
              <span className="js-fadeInTitle">c</span>
              <span className="js-fadeInTitle">o</span>
              <span className="js-fadeInTitle">n</span>
              <span className="js-fadeInTitle">t</span>
              <span className="js-fadeInTitle">a</span>
              <span className="js-fadeInTitle">c</span>
              <span className="js-fadeInTitle">t</span>
            </span>
            <h2 className={styles.headingJp}>お問い合わせ・ご相談</h2>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>
              ご相談やお見積もりなどお気軽にご連絡くださいませ。
              内容を確認の上、3営業日以内にご返信いたします。
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <span className={styles.itemAccent}>*</span>は必須項目です。
              </li>
              <li className={styles.item}>
                ご入力いただいたメールアドレスにご返信いたしますので、お間違えのないようお願いいたします。
              </li>
              <li className={styles.item}>
                1週間経っても返信が届かない場合は、メールアドレスと受信設定をご確認の上お手数ではございますが改めてご連絡ください。
              </li>
            </ul>

            <form
              className={styles.form}
              onSubmit={handleSubmit(sendForm)}
            >
              <div className={styles.unit}>
                <label htmlFor="company" className={styles.label}>会社名 / 屋号</label>
                <input id="company" type="text" className={styles.input} placeholder="例) 〇〇株式会社" {...register("company")}/>
              </div>
              <div className={styles.unit}>
                <label htmlFor="name" className={styles.label}>お名前<span className={styles.required}>*</span></label>
                <input type="text" className={styles.input} placeholder="例) 山田太郎" {...register("fullName", { required: true })}/>
                {errors.fullName && <span className={styles.error}>お名前は必須項目です。</span>}
              </div>
              <div className={styles.unit}>
                <label htmlFor="mail" className={styles.label}>メールアドレス<span className={styles.required}>*</span></label>
                <input id="mail" type="email" className={styles.input} placeholder="例) sample@xxx.com" {...register("email", { required: true })}/>
                {errors.email && <span className={styles.error}>メールアドレスは必須項目です。</span>}
              </div>
              <div className={styles.textareaUnit}>
                <label htmlFor="message" className={styles.label}>お問い合わせ内容<span className={styles.required}>*</span></label>
                <textarea id="message" className={styles.textarea} placeholder="例) 〇〇について相談したいです。" {...register("message", { required: true })}></textarea>
                {errors.message && <span className={styles.error}>お問い合わせ内容は必須項目です。</span>}
              </div>
              <div className={styles.button}>
                <input value="送信する" type="submit" className={styles.submit} />
              </div>
            </form>
          </div>
          <div className={styles.topButton}>
            <Link href='/' className={styles.topLink}>
              <span className={styles.arrow}></span>
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}