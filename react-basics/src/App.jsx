import './App.css'
import ChildComponent1 from './components/ChildComponent1'
import ChildComponent2 from './components/ChildComponent2'
import FeatureToggler from './components/FeatureToggler'
// import { Greeting } from './components/Greeting'
import LoginStatus from './components/LoginStatus'
import ParentComponent  from './components/ParentComponent'

function App() {
  return (
    <>
      {/* <FeatureToggler />
      <LoginStatus /> */}
      <ParentComponent> 
         <ChildComponent1 userName={"Child1"}/>
         <ChildComponent2 userName={"Child2"}/>
      </ParentComponent>
    </>
  )
}

export default App
