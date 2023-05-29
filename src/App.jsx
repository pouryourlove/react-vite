import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";

function App() {
  return (
    <div>
      <Slots val1="🎈" val2="🎈" val3="🎈" />
      <Slots val1="🎈" val2="🎃" val3="🎈" />
    </div>
  );
}

export default App;
