import { client, ssrCache } from '@lib/urql'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'urql'
import { Poppins } from 'next/font/google'
import { CookiesBox } from '@components/CookiesBox'
import { useEffect, useState } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800"]
})

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  const [cookies, setCookies] = useState<boolean | null>(true)

  useEffect(() => {
    const response = window.localStorage.getItem("cookies")
    if (response !== null) {
      setCookies(Boolean(response))
    } else {
      setCookies(null)
    }
  }, [])

  return (
    <Provider value={client} >
      <main className={`${poppins.className}`}>
        {cookies == null ? (<CookiesBox setCookies={setCookies} />) : ""}
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
