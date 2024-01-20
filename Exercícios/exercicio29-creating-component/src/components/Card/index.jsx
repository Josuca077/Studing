import Title from "../Title"
import Text from "../Text"
import Button from "../Button"
import styles from "./Card.module.css"

export default function Card () {
    return (
        <section className={styles.section}>
        <Title />

        <Text />

        <Button />
      </section>
    )
}