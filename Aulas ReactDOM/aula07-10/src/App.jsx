import Title from './components/Title'
import Title2 from './components/Title2'
import Status from './components/Status'
import style from "./styles/App.modules.css"


export default function App () {
  return (
    <div className={style.app}>
        <Title />
        <Title2 />
        <Status />
    </div>
  )
}