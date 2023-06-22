import { useRouter } from "next/router";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import coffeStoreData from "../../data/coffee-stores.json"
import FSData from "../../data/foursquare-data.json"
import styles from '../../styles/coffe-store.module.css'
import cls from 'classnames';

export function getStaticProps(staticProps) {
    const params = staticProps.params;
    const fs_data = FSData.results // mimic the fetch function
    return {
        props: {
            coffeeStore: fs_data.find((coffeeStore) => {
                return coffeeStore.fsq_id .toString() === params.id;
            })
        }
    }
}

export function getStaticPaths() {
    const fs_data = FSData.results
    const paths = fs_data.map(coffeStore => {
        return {
            params: {
                id: coffeStore.fsq_id.toString()
            }
        }
    })
    return {
        paths,
        fallback: true,
    }
}
const CoffeeShop = (props) => {
    const router = useRouter();
    const {location , name, imgUrl} = props.coffeeStore
    console.log('LOG ', location.neighborhood[0]);
    const handleUpVote = () => {
        console.log("handle up vote pushed")
    }
    if(router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href="http://localhost:3000/">
                            <p>Back to home</p>
                        </Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{name}</h1>
                    </div>
                    <Image src={imgUrl} width={600} height={360} className={styles.storeImage} alt={name}/>
                </div>
                <div className={cls("glass",styles.col2)}>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/drop.svg" width={24} height={24} />
                        <p className={styles.text}>{location.formatted_address}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/navi.svg" width={24} height={24} />
                        <p className={styles.text}>{location.neighborhood[0]}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/like.svg" width={24} height={24} />
                        <p className={styles.text}>1</p>
                    </div>
                    <button className={styles.upvoteButton} onClick={handleUpVote}>Handle up Vote</button>
                </div>
            </div>
       
 
        </div>
    )
}

export default CoffeeShop;