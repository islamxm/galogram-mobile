import styles from './Checkbox.module.scss';


const Checkbox = ({
    id,
    text,
    checked,
    onChange,
    disabled
}) => {
    return (
        <div className={styles.checkbox}>
            <input checked={checked} onChange={onChange} className={styles.input} type="checkbox" id={id}/>
            <label htmlFor={id} className={styles.label}>
                <div className={styles.icon}></div>
                <div className={styles.text}>
                    {text}
                </div>
            </label>
        </div>
    )
}

export default Checkbox;