import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
      </div>
      <Companies />
      <Residencies/>
    </>
  );
}

export default App;
