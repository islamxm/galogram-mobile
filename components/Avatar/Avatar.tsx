import styles from './Avatar.module.scss';
import Image from 'next/image';

const Avatar = ({
    variant,
    image,
    link,
    isActive,
}) => {
    return (
        <div className={`${styles.avatar} ${isActive ? 'active' : ''}`} >
            <div className={styles.inner}>
                <Image
                    className={styles.img}
                    src={image}
                    placeholder={'blur'}
                    />
            </div>
        </div>
    )
}

export default Avatar;