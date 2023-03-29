import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return <div theme-data="winter"> 
      <Navbar/>
      <Component {...pageProps} />
    </div>
  }