import Navbar from '../components/Navbar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
      <Navbar />
      <div className="container pt-5 mx-auto px-8 sm:px-5 lg:px-12">
        <Component {...pageProps} />
      </div>
  </>
}

export default MyApp
