import '@/styles/styles.scss';
import type { AppProps } from 'next/app'
import Router from 'next/router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'; 


NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());


const App = ({ Component, pageProps }: AppProps) => {

  return (
    <Component {...pageProps} />
  )
}

export default App;
