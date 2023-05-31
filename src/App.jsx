import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "chicken breasts", quantity: 4, completed: false },
  { id: 4, item: "carrots", quantity: 6, completed: true },
];

function App() {
  return (
    <ShoppingList items={data} />
    // <div>
    //   <Slots val1="🎈" val2="🎈" val3="🎈" />
    //   <Slots val1="🎈" val2="🎃" val3="🎈" />
    // </div>
  );
}

export default App;
