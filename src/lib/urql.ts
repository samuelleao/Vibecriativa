import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql'

const isServerSide = typeof window === 'undefined'

const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
    url: `https://api-sa-east-1.hygraph.com/v2/cli123fs43zd501taaqxe9si8/master`,
    exchanges: [cacheExchange, ssrCache, fetchExchange]
})

export { client, ssrCache }