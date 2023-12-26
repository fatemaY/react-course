
// import './App.css'
import Button from "./assets/components/buttons/Button"


function App() {
  

  return (
    <>
    <div>
      <Button text="Important" isImportant={true} />
      <Button text="Not Important" isImportant={false} />
    </div>
    </>
  )
}

export default App
