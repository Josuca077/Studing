import Title from './components/Title'
import Title2 from './components/Title2'
import Status from './components/Status'
import styles from './App.modules.css'


export default function App () {
  return (
    <div className={styles.app}>
        <Title />
        <Title2 />
        <Status />
    </div>
  )
}