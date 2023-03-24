import styles from '../../../styles/blogList.module.scss';
import type { Blog } from '../../../types/blog';
import Image from "next/legacy/image";
import Link from 'next/link';

type Props = {
  blog: Array<Blog>;
}

export default function BlogList(props: Props) {
  const filteredBlog = props.blog.filter((article) => article.postName === 'Kyan');
  const sortedBlog = filteredBlog.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const latestBlog = sortedBlog.slice(0, 3);

  return(
    <ul className={styles.list}>
    {latestBlog.map((article) => (
        <h2 key={article.title}>{article.title}</h2>
    ))}
    </ul>
  )
}