import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import type { Works } from '../types/works';
import { client } from '../libs/client';
import Top from '../components/layouts/top/topSection'

type Props = {
  works: Array<Works>;
}

export default function Home({ works }: Props) {
  return (
    <>
      <Top />
      <ul>
        {works.map((works) => (
          <li key={works.id}>
            <Link href={`/works/${works.id}`}>
              {works.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'works'});

  return {
    props: {
      works: data.contents,
    },
  }
}