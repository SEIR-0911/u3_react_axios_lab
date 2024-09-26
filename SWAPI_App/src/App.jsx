import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <div className="main-container">
        <Main />
      </div>

      <div className="header-container">
        <Header />
      </div>
    </div>
  );
}

export default App;
