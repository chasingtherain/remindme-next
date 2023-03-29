import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import HeroHome from '../components/landing/Hero';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Remind Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mt-48'>
        <HeroHome/>
      </main>
    </div>
  )
}
