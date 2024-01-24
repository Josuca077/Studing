import styles from "./Button.module.css"

export default function Button ({ href, text }) {
    return (
        <a
        className={styles.wrapper}
        href={href}
        target="_blank"
        >
            {text}
        </a>
    )
}