import { GetStaticProps, GetStaticPropsContext } from 'next';
import { client } from '../../libs/client';
import type { Works } from '../../types/works';


type Props = {
  works: Works;
}

export default function WorksId({ works }: Props) {
  return (
    <main>
      <h1>{works.title}</h1>
      <p>{works.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${works.body}`,
        }}
      />
    </main>
  )
}

//静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'works'});
  const paths = data.contents.map((content: Works) => `/works/${content.id}`);
  return { paths, fallback: false };
};

//データをテンプレートに受け渡す部分の処理
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({ endpoint: 'works', contentId: idExceptArray});

  return {
    props: {
      works: data,
    },
  }
}