import swPoster from "./assets/sw-poster.jpg"
import rotjPoster from "./assets/rotj-poster.jpg"
import esbPoster from "./assets/esb-poster.jpg"
import Card from "./components/Card"

export default function App () {
  return (
    <>
    <Card title="Pôster: Star Wars (1977)" poster={swPoster}/>
    <Card title="Pôster: Empire Strikes Back (1980)" poster={esbPoster}/>
    <Card title="Pôster: Return of the Jedi (1983)" poster={rotjPoster}/>
    </>
  )
}
 