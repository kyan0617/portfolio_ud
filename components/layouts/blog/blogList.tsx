import styles from '../../../styles/blogList.module.scss';
import type { Blog } from '../../../types/blog';
import Image from "next/legacy/image";

type Props = {
  blog: Array<Blog>;
}

export default function BlogList(props: Props) {
  const filteredBlog = props.blog.filter((article) => article.postName === 'Kyan');
  const sortedBlog = filteredBlog.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const latestBlog = sortedBlog.slice(0, 3);

  return(
    <ul className={styles.list}>
    {latestBlog.map((article, index) => (
        <li className={`${index === 0 ? styles.firstItem : styles.item}`} key={article.title}>
          <a href={`https://next-blog.site/media/${article.id}`} className={styles.link} target="_blank" rel="noopener noreferrer">
            <div className={styles.img}>
              <Image
                src={article.thumbnail.url}
                alt={article.category}
                width={294}
                height={197}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className={styles.detail}>
              <h2 className={styles.title}>{article.title}</h2>
              <div className={styles.button}>
                <span className={styles.buttonImage}>
                  <Image src='/src/img/arrow_black.svg' layout='responsive' objectFit='contain' alt='arrow' width={16} height={14} />
                </span>
                <span className={styles.buttonImageHover}>
                  <Image src='/src/img/arrow_white.svg' layout='responsive' objectFit='contain' alt='arrow' width={16} height={14} />
                </span>
              </div>
            </div>
          </a>
        </li>
      ))}
      <li className={styles.viewAll}>
        <a href="https://next-blog.site/" className={styles.viewAllLink} target="_blank" rel="noopener noreferrer">記事一覧を見る</a>
      </li>
    </ul>
  )
}