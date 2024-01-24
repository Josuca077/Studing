import styles from "./Title.module.css"

export default function Title ({ text, children }) {
    return (
        <h1 
        className={styles.wrapper}
        >
            {text}
            {children}
        </h1>
    )
}