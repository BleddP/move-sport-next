import '../styles/globals.scss'
import { useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { Navbar, FooterStrip } from '@features'

// Libs
import { pageview } from '../libs/analytics'
import { getLCP, getFID, getCLS } from 'web-vitals'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  const logRouteChange = (url) => {
    pageview(url)
  }

  useEffect(() => {
    getCLS(console.log)
    getFID(console.log)
    getLCP(console.log)
    router.events.on('routeChangeComplete', logRouteChange)
    return () => {
      router.events.off('routeChangeComplete', logRouteChange)
    }
  }, [router.events])

  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <FooterStrip />
    </Fragment>
  )
}

export default App
