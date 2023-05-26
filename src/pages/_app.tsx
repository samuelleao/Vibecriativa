import { client, ssrCache } from '@lib/urql'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'urql'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800"]
})

export default function App({ Component, pageProps }: AppProps) {

  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <Provider value={client} >
      <main className={`${poppins.className}`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
