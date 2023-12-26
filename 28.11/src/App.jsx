
import './App.css'
// import Video from './assets/components/Video'
import Image from './assets/components/Image'
import Blackimg from "../imges/black-white-color1.jpg"
import Colorimg from "../imges/color-img1.jpg"


function App() {
  return (
    <>
    {/* <Video /> */}
    <Image {...Blackimg} {...Colorimg} />
    </>
  )
}

export default App
