import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from "../styles/index.module.css"
import Banner from '../components/banner';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleBannerOnClick = () => {
    console.log('Ossu')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Test title</title>
      </Head>
      <main>
        <Banner buttonText={"Hello Button"} onClickHandler={handleBannerOnClick}/>
      </main>
      <footer></footer>
    </div>
  )
}
