import Image from 'next/image'
import Head from 'next/head'
import styles from "../styles/index.module.css"
import Banner from '../components/banner';

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
