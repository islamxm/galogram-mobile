import styles from './notfound.module.scss';
import Layout from '@/components/Layout/Layout';
import Navbar from '@/components/Navbar/Navbar';

const Notfound = () => {
    return (

        <Layout>
            <h1 className={styles.notfound}>404 not found</h1>
            <Navbar/>
        </Layout>
        
    )
}

export default Notfound;