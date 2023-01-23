import styles from './Button.module.scss';
import { PulseLoader } from 'react-spinners';

const Button = ({
    text,
    beforeIcon,
    afterIcon,
    variant,
    style,
    fill,
    load,
    disabled,
    onClick
}) => {

    const selectVariant = (variant) => {
        switch(variant) {
            case 'orange':
                return styles.orange;
            default:
                return styles.gray;
        }
    }
    
    
    return (
        <button disabled={disabled} onClick={onClick} style={{...style, width: fill ? '100%' : 'auto'}} className={`${styles.button} ${selectVariant(variant)} ${load ? 'load' : ''}`}>
            {
                load ? (
                    <div className={styles.loader}>
                        <PulseLoader/>
                    </div>
                ) : null
            }
            {
                beforeIcon ? (
                    <div className={styles.beforeIcon}>{beforeIcon}</div>
                ) : null
            }
            {
                !load ? (
                    <div className={styles.text}>{text}</div>
                ) : null
            }
            {
                afterIcon ? (
                    <div className={styles.afterIcon}>{afterIcon}</div>
                ) : null
            }
        </button>
    )
}

export default Button;