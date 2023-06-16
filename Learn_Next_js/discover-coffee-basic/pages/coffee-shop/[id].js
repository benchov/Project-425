import { useRouter } from "next/router";
import Link from 'next/link';
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
    return {
        paths: [ {params: {id: "0"}}, {params: {id: "1"}}, {params: {id: "300"}}],
        fallback: false
    }
}
const CoffeeShop = (props) => {
    const router = useRouter();
    return (
        <div>
            <div>{router.query.id}</div>
            <Link href="http://localhost:3000/">
                <p>Back to home</p>
            </Link>
            <Link href="/coffee-shop/">
                <p>Test the dynamic route</p>
            </Link>
            <p>{props.coffeeStore.address}</p>
            <p>{props.coffeeStore.name}</p>

        </div>
    )
}

export default CoffeeShop;