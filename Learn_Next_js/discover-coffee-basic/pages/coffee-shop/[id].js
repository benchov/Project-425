import { useRouter } from "next/router";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import coffeStoreData from "../../data/coffee-stores.json"
import styles from '../../styles/coffe-store.module.css'
import cls from 'classnames';

export function getStaticProps(staticProps) {
    const params = staticProps.params;
    return {
        props: {
            coffeeStore: coffeStoreData.find((coffeeStore) => {
                return coffeeStore.id.toString() === params.id;
            })
        }
    }
}

export function getStaticPaths() {
    const paths = coffeStoreData.map(coffeStore => {
        return {
            params: {
                id: coffeStore.id.toString()
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
    const {address, name, neighbourhood, imgUrl} = props.coffeeStore

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
                        <p className={styles.text}>{address}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/navi.svg" width={24} height={24} />
                        <p className={styles.text}>{neighbourhood}</p>
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