import Image from 'next/image'
import Head from 'next/head'
import styles from "../styles/index.module.css"
import Banner from '../components/banner';
import Card from '../components/card'
import coffeeStores from '../data/coffee-stores.json'

export async function getStaticProps (context){
  return {
    props: {
      coffeeStores,
    }
  }
}
export default function Home(props) {

  const handleBannerOnClick = () => {
    console.log('Ossu')
  }

  const showStores = () => {
    return props.coffeeStores.map( (coffeeStore) => {
      return (
        <Card 
          key={coffeeStore.id}
          cardTitle={coffeeStore.name}
          imgUrl={coffeeStore.imgUrl}
          url={`/coffee-shop/${coffeeStore.id}`}
          className={styles.card}
        />
      )
    }
    )
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
          {props.coffeeStores.length > 0 ? (
              <>
               <h2 className={styles.heading2}>Toronto Stores</h2>
               <div className={styles.cardLayout}> 
                 {showStores()}
               </div>
              </> 

          ):
          <><h2>No data fallback case</h2></>
       }
        </div>
      </main>
      <footer></footer>
    </div>
  )
}
