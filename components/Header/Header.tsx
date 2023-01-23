import styles from './Header.module.scss';
import Container from '../Container/Container';

const Header = ({title}) => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__in}>
                    <div className={styles.header__title}>{title}</div>
                </div>
            </Container>
        </header>
    )
}

export default Header;