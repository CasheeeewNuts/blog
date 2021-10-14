import Head from 'next/head'
import Banner from '~/components/Banner'
import ArticleList from "~/components/ArticleList";

const Home = () => {
  return (
    <div>
      <Head>
        <title>#!/bin/casheeeewnuts.sh</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Banner />
        <ArticleList/>
      </main>

      <footer>
        {/*<a*/}
        {/*  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Powered by{' '}*/}
        {/*  <img src="/vercel.svg" alt="Vercel Logo" />*/}
        {/*</a>*/}
      </footer>
    </div>
  )
}

export default Home
