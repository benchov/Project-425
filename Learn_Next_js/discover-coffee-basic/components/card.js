import styles from '../styles/card.module.css';
import Image from 'next/image'
import Link from 'next/link'
import cls from 'classnames'

const Card = (props) => {
    return (
        <Link className={styles.cardLink} href={props.url}>
            <div className={cls("glass",styles.container)}>
                <div className={styles.cardHeaderWrapper}>
                    <h2 className={styles.cardHeader}>{props.cardTitle}</h2>
                </div>
                <div className={styles.cardImageWrapper}>
                    <Image src={props.imgUrl} width={260} height={160}/> 
                </div>
            </div>
        </Link>
    )
}

export default Card;