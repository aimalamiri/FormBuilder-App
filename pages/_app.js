import { Provider } from 'react-redux'
import Navbar from '../components/Navbar';
import store from '../redux/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
      <Provider store={store}>
        <Navbar />
        <div className="container pt-5 mx-auto px-8 sm:px-5 lg:px-12">
          <Component {...pageProps} />
        </div>
      </Provider>
  </>
}

export default MyApp
