import styles from './IconButton.module.scss';
import { FadeLoader } from 'react-spinners';
const IconButton = ({
    variant,
    size,
    iconSize,
    icon,
    load,
    color
}) => {


    return (
        <button 
            style={{width: size, height: size, color: color, fontSize: size - 3, lineHeight: size - 3}} 
            className={`${styles.iconButton} ${load ? styles.load : ''}`}>
            {icon}
        </button>
    )
}

export default IconButton;