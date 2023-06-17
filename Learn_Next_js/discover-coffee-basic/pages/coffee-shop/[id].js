import { useRouter } from "next/router";
import Link from 'next/link';
import Head from 'next/head';
import coffeStoreData from "../../data/coffee-stores.json"

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
    const {address, name, neighbourhood} = props.coffeeStore
    if(router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>{name}</title>
            </Head>
            <Link href="http://localhost:3000/">
                <p>Back to home</p>
            </Link>
            <p>{address}</p>
            <p>{name}</p>
            <p>{neighbourhood}</p>

        </div>
    )
}

export default CoffeeShop;