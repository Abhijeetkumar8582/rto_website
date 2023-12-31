import '@/styles/globals.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'

export default function App({ Component, pageProps }) {
  return (
<>
    <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
