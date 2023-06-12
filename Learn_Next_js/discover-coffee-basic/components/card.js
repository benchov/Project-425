import styles from '../styles/card.module.css';
import Image from 'next/image'
import Link from 'next/link'

const Card = (props) => {
    return (
        <Link href={props.url}>
 
            <h2 className={styles.title}>{props.cardTitle}</h2>
            <Image src={props.imgUrl} width={260} height={160}/> 

    </Link>
    )
}

export default Card;