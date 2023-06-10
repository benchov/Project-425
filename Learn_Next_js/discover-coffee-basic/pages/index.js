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
      <main className={styles.main}>
        <Banner buttonText={"View stores nearby"} onClickHandler={handleBannerOnClick}/>
        <div className={styles.heroImage}>
          <Image src='/static/hero-image.png' width={700} height={400}/>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}
