import styles from './HomeStories.module.scss';
import Avatar from '@/components/Avatar/Avatar';

const mock = [
    {username: 'test username', active: true},
    {username: 'islam', active: true},
    {username: 'Yaroslav_1'},
    {username: 'asdadasd'},
    {username: 'asdadasd'},
    {username: 'asdadasd'},
    {username: 'asdadasd'},
    {username: 'asdadasd'},
    {username: 'looooooooooooong username'},
]


const HomeStories = ({list}) => {
    

    return (
        <div className={styles.homeStories}>
            <div className={styles.inner}>
                {
                    mock?.map((item) => (
                        <div className={styles.item}>
                            <Avatar
                                size={70}
                                isActive={item.active}
                                storie
                                />
                            <div className={styles.username}>
                                {item.username}
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default HomeStories;