import Link from "next/link";
import styles from './Navbar.module.scss';
import {AiFillHome, AiOutlineSearch, AiFillPlusCircle, AiFillHeart} from 'react-icons/ai';
import { useRouter } from "next/router";
import {Row, Col} from 'antd';

const navList = [
    {id: 1, icon: <AiFillHome/>, path: '/'},
    {id: 2, icon: <AiOutlineSearch/>, path: '/navigator'},
    {id: 3, icon: <AiFillPlusCircle/>, path: '/create'},
    {id: 4, icon: <AiFillHeart/>, path: '/actions'},
    {id: 5, icon: <AiFillHeart/>, path: '/profile'},
]

const Navbar = () => {
    const {pathname} = useRouter();

    return (
        <div className={styles.navbar}>
            <div className={styles.inner}>
                {
                    navList?.map(item => (
                        <div key={item.id} className={styles.item}>
                            <Link className={pathname === item.path ? styles.active : ''} href={item.path}>
                                {item.icon}  
                            </Link>
                        </div>
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default Navbar;