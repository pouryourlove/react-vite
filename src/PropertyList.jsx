import Property from "./Property";

export default function PropertyList({ properties }) {
  return (
    <div style={{ display: "flex" }}>
      {properties.map((i) => (
        <Property {...i} key={i.id} />
      ))}
    </div>
  );
}
