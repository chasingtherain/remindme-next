import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return <div theme-data="winter"> 
      <Navbar/>
      <Component {...pageProps} />
    </div>
  }