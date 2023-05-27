import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";

function App() {
  return (
    <div>
      <Heading color="magenta" text="welcome!" fontSize="20px" />
      <Heading color="teal" text="Zzong" fontSize="48px" />
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
