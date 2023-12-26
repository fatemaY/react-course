
import AboutPage from './19.2-components/AboutPage.jsx'
import TopMenu from './19.2-components/TopMenu.jsx'
import './App.css'
// import { ContextProvider } from './GiftContext.jsx'
import { ThemeProvider } from './ThemeContext .jsx'
// import { Grandfather } from './components/GrandFather.jsx'
// import HomePage from './19.2-components/HomePage.jsx'

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  // Function to toggle day and night mode
  return (
    // <>
    //    <ContextProvider>
    //      <Grandfather />
    //    </ContextProvider>
    // </>
    <>
    <ThemeProvider >
        <TopMenu />
      </ThemeProvider>
      <div className="Home-container">
        {/* <HomePage /> */}
        <AboutPage />
      </div>
    </>
  )
}

export default App
