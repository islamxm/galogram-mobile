import styles from './MainLayout.module.scss';


const MainLayout = ({children}) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}

export default MainLayout;