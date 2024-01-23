import styles from "./Profile.module.css"

export default function Profile ({ profilePic, name, bio, phone, email, githubUrl, linkedinUrl, instagramUrl }) {
    return (

        <section className={styles.section}>

            <img src={profilePic} alt="foto do perfil" className={styles.avatar} />
            <h1 className={styles.name}>{name}</h1>

            <span className={styles.bio}>{bio}</span>

            <span className={styles.phone}>{phone}</span>

            <span className={styles.email}>{email}</span>

            <section className={styles.buttonSection}>
                <a className={styles.button} href={githubUrl}>GitHub</a>
                <a className={styles.button} href={linkedinUrl}>Linkedin</a>
                <a className={styles.button} href={instagramUrl}>Instagram</a>
            </section>

        </section>

    )
}