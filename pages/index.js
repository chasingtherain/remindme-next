import Head from 'next/head';
import HeroHome from '../components/landing/Hero';

export default function Home({subtitle,textAnimation,title}) {

  return (
    <div className="">
      <Head>
        <title>Remind Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mt-48'>
        <HeroHome subtitle={subtitle} textAnimation={textAnimation} title={title}/>
      </main>
    </div>
  )
}

export async function getStaticProps(){
  return {
    props: {
      textAnimation: ['Buy Eggs',2500,'Pick The Kids',2500,'Stretch My Legs',2500],             
      subtitle: `Never forget things that matter to you again.`,
      title: `Remind me to`

    }
  }
}