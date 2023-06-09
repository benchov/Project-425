import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const DynamicRootComponent = () => {
    const router = useRouter()
    return (
    <div>
        <Head>
            <title>{router.query.root}</title>
        </Head>
        
        <p>this is a dynamic route</p>
        <Link href="http://localhost:3000/courses/next.js">
            <p>Go to next.js page</p>
        </Link>
    </div>
    )
}

export default DynamicRootComponent;