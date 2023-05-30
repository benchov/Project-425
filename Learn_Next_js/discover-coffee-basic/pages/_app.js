import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <p>this is created by benchov_the_zen</p>
    </div>
  )
}
