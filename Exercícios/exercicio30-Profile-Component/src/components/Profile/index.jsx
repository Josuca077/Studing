import Title from "../Title"
import Info from "../Info"
import LinkBtn from "../LinkBtn"
import ActionBtn from "../ActionBtn"
import styles from "./Profile.module.css"

export default function Profile ({ profilePic, name, bio, phone, email, githubUrl, linkedinUrl, instagramUrl }) {
    function alertFollow () {
        alert(`Você está seguindo ${name}`)
    }

    return (

        <section className={styles.section}>

            <img src={profilePic} alt="foto do perfil" className={styles.avatar} />

            <Title text={name}> <ActionBtn onClick={alertFollow}>Follow</ActionBtn> </Title>

            <Info >{bio}</Info>
            <Info >{phone}</Info>
            <Info >{email}</Info>

            <Info
            className={styles.buttonSection}
            >
                <LinkBtn href={githubUrl} text={"GitHub"}/>
                <LinkBtn href={linkedinUrl} text={"Linkedin"}/>
                <LinkBtn href={instagramUrl} text={"Instagram"}/>
            </Info>

        </section>

    )
}