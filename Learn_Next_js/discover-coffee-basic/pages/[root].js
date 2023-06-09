import { useRouter } from "next/router";
import Link from "next/link";

const DynamicRootComponent = () => {
    const router = useRouter()
    return (
    <div>
        <p>{router.query.root}</p>
        <p>this is a dynamic route</p>
        <Link href="http://localhost:3000/courses/next.js">
            <p>Go to next.js page</p>
        </Link>
    </div>
    )
}

export default DynamicRootComponent;