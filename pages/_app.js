import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return <div theme-data="winter"> 
      <Component {...pageProps} />
    </div>
  }