import "./App.css";
import AngryButton from "./components/AngryButton.js";
import CounterButton from "./components/CounterButton.js";
import LightSwitchButton from "./components/LightSwitchButton.js";
import TextRepeaterButton from "./components/TextRepeaterButton.js";

function App() {
  return (
    <div className={`App`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
