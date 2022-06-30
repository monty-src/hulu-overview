import Head from 'next/head';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Results from '../components/Results';
import requests from "../utils/requests";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Casting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={props.results} />
    </>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`).then(res => res.json());
  return {
    props: {
      results: request.results
    }
  }
}