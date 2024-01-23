import profilePic from "./assets/profilePic.svg"
import Profile from "./components/Profile"

export default function App () {
    return (
        <>
            <Profile
            profilePic={profilePic}
            name="Josué Costa"
            bio="Desenvolvedor Front-End JavaScript | React"
            phone="(61) 9 9557-7494"
            email="josuecosta077@gmail.com"
            githubUrl="https://github.com/JosueAFCosta"
            linkedinUrl="https://www.linkedin.com/in/josueafcosta/"
            instagramUrl="https://www.instagram.com/josue__costa/" />
        </>
    )
}