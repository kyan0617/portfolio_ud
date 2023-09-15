import Head from "next/head";
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { client } from '../../libs/client';
import type { Works } from '../../types/works';
import HeaderSection from '../../components/layouts/header/headerSection'
import WorkDetails from '../../components/layouts/works/workDetails'
import ContactSection from '../../components/layouts/contact/contactSection'
import FooterSection from '../../components/layouts/footer/footerSection'

type Props = {
  works: Works;
}

export default function WorksId({ works }: Props) {
  return (
    <>
      <Head>
        <title>{ works.title } | Haruka Nishida Portfolio</title>
      </Head>
      <HeaderSection />
      <WorkDetails  works={works}/>
      <ContactSection />
      <FooterSection />
    </>
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