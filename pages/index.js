import { useUser } from '@auth0/nextjs-auth0/client';
import Head from 'next/head';
import HeroHome from '../components/landing/Hero';
// import prisma from '../lib/prisma';

export default function Home({subtitle,textAnimation,title, users}) {
  const { user, error, isLoading } = useUser();
  console.log(users)
  if (isLoading) return <p>loading..</p>
  return (
    <div className="">
      <Head>
        <title>Remind Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mt-48'>
        
        <HeroHome subtitle={subtitle} textAnimation={textAnimation} title={title} user={user}/>
        {/* {users.map(user => <p className='text-center'>{user.email}</p>)} */}
      </main>
    </div>
  )
}

export async function getStaticProps(){
  // const currentUser = await prisma.user.findMany({
  //   where: { email: "baba@mail.com" }
  // });

  // const serializedUserData = currentUser.map(item => {
  //   return {
  //     ...item,
  //     createdAt: item.createdAt.toISOString(),
  //     updatedAt: item.updatedAt.toISOString()
  //   };
  // });
  return {
    props: {
      textAnimation: ['Buy Eggs',2500,'Pick The Kids',2500,'Stretch My Legs',2500],             
      subtitle: `Never forget things that matter to you again.`,
      title: `Remind me to`,
      // users: serializedUserData,
    }
  }
}

