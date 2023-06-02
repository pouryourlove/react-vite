import Property from "./Property";

export default function PropertyList({ properties }) {
  return (
    <ul style={{ display: "flex" }}>
      {properties.map((i) => (
        <Property name={i.name} rating={i.rating} price={i.price} key={i.id} />
      ))}
    </ul>
  );
}
