import styles from './Avatar.module.scss';
import Image from 'next/image';
import avatarPlaceholder from '/public/avatar-placeholder.png';

const Avatar = ({
    variant,
    image = avatarPlaceholder,
    link,
    isActive,
    size,
    storie
}) => {
    return (
        <div style={{width: size, height: size}} className={`${styles.avatar} ${isActive ? styles.active : ''} ${storie ? styles.storie : ''}`} >
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