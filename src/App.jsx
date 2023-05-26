import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";

function App() {
  return (
    <div>
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} /> */}
      {/* <Greeter person="Bill" from="colt" />
      <Greeter person="Julia" />
      <Greeter />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
    </div>
  );
}

export default App;
