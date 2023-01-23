import styles from './Input.module.scss';


const Input = ({
    type,
    value,
    placeholder,
    disabled,
    error,
    onChange,
    onBlur,
    onFocus,
    label
}) => {
    return (
        <div className={`${styles?.wrapper} ${error ? styles.error : ''}`}>
            {
                label ? (
                    <div className={styles.label}>{label}</div>
                ) : null
            }
            <input 
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                placeholder={placeholder}
                value={value}
                type={type}
                className={styles.input}/>
        </div>
    )
}

export default Input;