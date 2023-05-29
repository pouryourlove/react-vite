export default function Slots({ val1, val2, val3 }) {
  const isWinner = val1 === val2 && val2 === val3;
  const style = { color: isWinner ? "green" : "red" };
  return (
    <div>
      <h1>
        {val1}
        {val2}
        {val3}
      </h1>
      {isWinner ? (
        <div>
          <h2 style={style}>You win!</h2>
          <h3>congrats!</h3>
        </div>
      ) : (
        <h2 style={style}>You lose!</h2>
      )}
    </div>
  );
}
