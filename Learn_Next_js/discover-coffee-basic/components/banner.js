import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import styles from "../styles/banner.module.css"
const Banner = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffee</span> 
                <span className={styles.title2}>Connoisseur</span>
            </h1>
            <p className={styles.subTitle}>Discover local coffee shops</p>
            <button className={styles.button}>{props.buttonText}</button>
        </div>
    )
}

export default Banner;