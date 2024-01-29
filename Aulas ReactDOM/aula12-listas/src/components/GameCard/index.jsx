import styles from "./GameCard.module.css"

export default function gameCard ({ coverImg, title, releaseYear, description }) {
    return (
    <div>
        <img
        src={coverImg}
        alt={title}
        className={styles.img}
        />

        <h2>{title} {releaseYear}</h2>
        
        <p>{description}</p>
    </div>
    )
}