import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from "../styles/index.module.css"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test title</title>
      </Head>
      <main>
        <h1>Test H1</h1>
      </main>
      <footer></footer>
    </div>
  )
}
