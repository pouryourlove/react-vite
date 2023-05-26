export default function Greeter({ person = "everyone", from = "anon" }) {
  return (
    <>
      <h1>Hi there, {person}!!!</h1>
      <h2>from, {from}</h2>
    </>
  );
}
