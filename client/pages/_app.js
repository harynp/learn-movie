import '../styles/globals.css';
import { AppWrapper } from '../helpers/context';


function Application({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default Application
