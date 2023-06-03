export default function Clicker({ message, buttonText }) {
  function handleClick() {
    alert(message);
  }
  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

// function handleClick() {
//   console.log("CLICKED THE BUTTON!");
// }

// function handleHover() {
//   console.log("HOVERED!!");
// }

// export default function Clicker() {
//   return (
//     <div>
//       <p onMouseOver={handleHover}>Click The Button</p>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// }
