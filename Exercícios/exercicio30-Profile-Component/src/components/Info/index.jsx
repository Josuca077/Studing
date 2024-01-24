import styles from "./Info.module.css"

export default function Info (props) {
    return (
        <span
        {...props}
        className={`${styles.wrapper} ${props.className}`}
        >
            {props.children}
        </span>
    )
}