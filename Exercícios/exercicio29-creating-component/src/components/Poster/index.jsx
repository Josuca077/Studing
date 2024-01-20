import styles from "./Poster.module.css"

export default function Poster () {
    return (
        <img
        className={styles.poster}
        src="../../../public/poster-starwars.jpg"
        alt="Pôster Star Wars"
        />
    )
}