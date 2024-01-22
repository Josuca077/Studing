import styles from "./Card.module.css"

export default function Card ({title, poster}) {
    return (
      <main className={styles.main}>

        <img className={styles.poster} src={poster} alt={title}/>

        <section className={styles.section}>

        <h1 className={styles.title}>{title}</h1>

        <p className={styles.text}>
          Um pôster decorativo épico do filme Star Wars, com muldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!
        </p>

        <button className={styles.button}>Comprar agora</button>
        </section>
      </main>
    )
}