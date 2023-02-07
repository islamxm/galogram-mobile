import styles from './HomeHeader.module.scss';
import logoUrl from '/public/logo-black.svg';
import Image from 'next/image';
import IconButton from '@/components/IconButton/IconButton';
import {AiOutlineMessage} from 'react-icons/ai';

const HomeHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <Image
                        src={logoUrl}
                        width={140}
                        height={45}
                        />
                </div>
                <div className={styles.action}>
                    <div className={styles.item}>
                        <IconButton
                            bordered={true}
                            size={30}
                            iconSize={18}
                            icon={<AiOutlineMessage/>}
                            color={'var(--text)'}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;