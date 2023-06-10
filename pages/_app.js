import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }) {
    return <div theme-data="winter"> 
      <UserProvider>
        <Head>
          <title>Landing | Remind Me</title>
          <meta charSet="UTF-8"/>
          <meta name="description" content="Set a reminder by email"/>
          <meta name="keywords" content="reminder, email reminder, remind me by email"/>
          <meta name="author" content="chasingrain"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Navbar/>
        <Component {...pageProps} />
        <ToastContainer />
      </UserProvider>
    </div>
  }