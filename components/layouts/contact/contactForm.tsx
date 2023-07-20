import { useState } from 'react';
import styles from '../../../styles/contactForm.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';


type FormValues = {
  company: string;
  name: string;
  email: string;
  message: string;
}


export default function WorkDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  
  const onSubmit = (data: FormValues) => {
    console.log(data); // フォームのデータを適切な処理で扱う
    setSubmitted(true); // submittedフラグを設定
  };

  let [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className={styles.container}>
        <div className={`${styles["inner"]} _inner`}>
          <h2 className={styles.heading}>
            contact
            <span className={styles.headingJp}>お問い合わせ・ご相談</span>
          </h2>
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
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSevGjhTJzyeCB6FwE4_CL8iyXBQgCiob15FM8TNCdsWEnggCA/formResponse?embedded=true"
              method="post"
              target="hidden_iframe"
            >
              <div className={styles.unit}>
                <label htmlFor="company" className={styles.label}>会社名 / 屋号</label>
                <input id="company" type="text" className={styles.input} placeholder="例) 〇〇株式会社" name="entry.1008989837" />
              </div>
              <div className={styles.unit}>
                <label htmlFor="name" className={styles.label}>お名前<span className={styles.required}>*</span></label>
                <input id="name" type="text" className={styles.input} placeholder="例) 山田太郎" {...register("name", { required: true })} name="entry.450422882" />
                {errors.name && <span className={styles.error}>お名前は必須項目です。</span>}
              </div>
              <div className={styles.unit}>
                <label htmlFor="mail" className={styles.label}>メールアドレス<span className={styles.required}>*</span></label>
                <input id="mail" type="email" className={styles.input} placeholder="例) sample@xxx.com" {...register("email", { required: true })} name="entry.1806869231" />
                {errors.email && <span className={styles.error}>メールアドレスは必須項目です。</span>}
              </div>
              <div className={styles.textareaUnit}>
                <label htmlFor="message" className={styles.label}>お問い合わせ内容<span className={styles.required}>*</span></label>
                <textarea id="message" className={styles.textarea} placeholder="例) 〇〇について相談したいです。" {...register("message", { required: true })} name="entry.361435846"></textarea>
                {errors.message && <span className={styles.error}>お問い合わせ内容は必須項目です。</span>}
              </div>
              <div className={styles.button}>
                <button type="submit" className={styles.submit} onSubmit={(e) => submitted=true}>送信する</button>
              </div>
              <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: 'none' }}
                onLoad={() => {
                  if (submitted) {
                    window.location.href = '/';
                  }
                }}
              ></iframe>
            </form>
          </div>
          <div className={styles.topButton}>
            <Link href='/' className={styles.topLink}>
              <span className={styles.arrow}></span>
              Back To Top
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}