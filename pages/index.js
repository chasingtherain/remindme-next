import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import HeroHome from '../components/landing/Hero';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Remind Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroHome/>
      </main>
    </div>
  )
}
