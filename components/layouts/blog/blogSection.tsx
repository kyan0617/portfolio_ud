import styles from '../../../styles/blog.module.scss';
import type { Blog } from '../../../types/blog';
import BlogList from './blogList'


type Props = {
  blog: Array<Blog>;
}

export default function BlogSection(props: Props) {  
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={`${styles.inner} _inner`}>
            <div className={styles.heading}>
              <span className={styles.headingText}>blog</span>
            </div>
            <div className={styles.main}>
              <div className={styles.title}>
                <h2 className={`${styles.titleText} js-fadeInTitleWrapper`}>
                  <span className="js-fadeInTitle">l</span>
                  <span className="js-fadeInTitle">a</span>
                  <span className="js-fadeInTitle">t</span>
                  <span className="js-fadeInTitle">e</span>
                  <span className="js-fadeInTitle">s</span>
                  <span className="js-fadeInTitle">t</span>
                  &nbsp;
                  <span className="js-fadeInTitle">a</span>
                  <span className="js-fadeInTitle">r</span>
                  <span className="js-fadeInTitle">t</span>
                  <span className="js-fadeInTitle">i</span>
                  <span className="js-fadeInTitle">c</span>
                  <span className="js-fadeInTitle">l</span>
                  <span className="js-fadeInTitle">e</span>
                </h2>
              </div>
              <BlogList blog={ props.blog }/>
            </div>
            <div className={styles.button}>
              <a href="https://next-blog.site/" className={styles.link}>記事一覧を見る</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}