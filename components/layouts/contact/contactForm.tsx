import styles from '../../../styles/contactForm.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type FormValues = {
  name: string;
  email: string;
  message: string;
}

export default function WorkDetails() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post('/api/sendMail', data);
      console.log(response.data);
      reset();
    } catch (error) {
      console.error(error);
    }
  }

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
            <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.unit}>
                <label htmlFor="company" className={styles.label}>会社名 / 屋号</label>
                <input id="company" type="text" className={styles.input} placeholder="例) 〇〇株式会社" name="company" />
              </div>
              <div className={styles.unit}>
                <label htmlFor="name" className={styles.label}>お名前<span className={styles.required}>*</span></label>
                <input id="name" type="text" className={styles.input} placeholder="例) 山田太郎" {...register("name", { required: true })} />
                {errors.name && <span className={styles.error}>お名前は必須項目です。</span>}
              </div>
              <div className={styles.unit}>
                <label htmlFor="mail" className={styles.label}>メールアドレス<span className={styles.required}>*</span></label>
                <input id="mail" type="email" className={styles.input} placeholder="例) sample@xxx.com" {...register("email", { required: true })} />
                {errors.email && <span className={styles.error}>メールアドレスは必須項目です。</span>}
              </div>
              <div className={styles.textareaUnit}>
                <label htmlFor="message" className={styles.label}>お問い合わせ内容<span className={styles.required}>*</span></label>
                <textarea id="message" className={styles.textarea} placeholder="例) 〇〇について相談したいです。" {...register("message", { required: true })}></textarea>
                {errors.message && <span className={styles.error}>お問い合わせ内容は必須項目です。</span>}
              </div>
              <div className={styles.button}>
                <input type="submit" value="送信する" className={styles.submit} />
              </div>
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