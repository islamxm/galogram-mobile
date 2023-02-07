import styles from './ProfileCard.module.scss';
import {useEffect} from 'react';

const ProfileCard = ({data}) => {

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className={styles.profileCard}>

        </div>
    )
}

export default ProfileCard