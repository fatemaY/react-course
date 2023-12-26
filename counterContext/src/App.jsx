import "./App.css";
import Counter from "./components/Counter/Counter";
import OnlyDisplayCount from "./components/OnlyDisplayCount/OnlyDisplayCount";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterProvider>
      <main className="App">
        <h1>Hello world</h1>
        <Counter/>
        {/* <OnlyDisplayCount/> */}
      </main>
    </CounterProvider>
  );
}

export default App;
