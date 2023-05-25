import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";

function App() {
  return (
    <div>
      <Greeter person="Bill" from="colt" />
      <Greeter person="Julia" from="colt" />
      <Greeter person="Ted" from="Elton"/>
    </div>
  );
}

export default App;
