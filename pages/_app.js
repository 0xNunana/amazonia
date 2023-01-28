import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../app/store' 
//sessionProvide allows for sessions to be active through out all the pages
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps:{session,...pageProps} }) {
  return ( <SessionProvider session={session}><Provider store={store}>
      <Component {...pageProps} />
    </Provider></SessionProvider>
  )
}
