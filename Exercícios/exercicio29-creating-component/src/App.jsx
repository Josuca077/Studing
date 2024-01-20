import Poster from "./components/Poster"
import Title from "./components/Title"
import Text from "./components/Text"
import Button from "./components/Button"
import styles from "./styles/App.module.css"

export default function App () {
  return (
    <main className={styles.main}>
      <Poster />

      <section className={styles.section}>
        <Title />

        <Text />

        <Button />
      </section>
    </main>
  )
}
 