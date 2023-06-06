import { useRouter } from "next/router";

const CoffeeShop = () => {
    const router = useRouter();
    return <div>{router.query.id}</div>
}

export default CoffeeShop;