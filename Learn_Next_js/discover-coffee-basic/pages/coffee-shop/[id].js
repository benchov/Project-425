import { useRouter } from "next/router";
import Link from 'next/link';


const CoffeeShop = () => {
    const router = useRouter();
    return (
        <div>
            <div>{router.query.id}</div>
            <Link href="http://localhost:3000/">
            <p>Back to home</p>
             </Link>
        </div>
    )
}

export default CoffeeShop;