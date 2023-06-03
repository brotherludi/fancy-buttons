import { useState } from "react";
import "./App.css";
import AngryButton from "./components/AngryButton.js";
import CounterButton from "./components/CounterButton.js";
import LightSwitchButton from "./components/LightSwitchButton.js";
import TextRepeaterButton from "./components/TextRepeaterButton.js";

function App() {
  const [light, setLight] = useState("off");

  return (
    <div className={`App ${light === "off" ? "dark" : ""}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} setLight={setLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
