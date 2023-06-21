import { useState } from "react";

export default function Counter() {
  console.log("RE-RENDERED");
  const [num, setNum] = useState(0);
  const changeNum = () => {
    //When making a state related to the previous data always use callback!
    setNum((current) => current + 1);
    console.log(`num: ${num}`);
  };
  const setToTen = () => {
    setNum(10);
  };

  return (
    <div>
      <p>The count is : {num}</p>
      <button onClick={changeNum}>Increment</button>
      <button onClick={setToTen}>Set to 10</button>
    </div>
  );
}
