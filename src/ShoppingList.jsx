function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li
          style={{
            color: i.completed ? "gray" : "red",
            textDecoration: i.completed ? "line-through" : "none",
          }}
        >
          {i.item} - {i.quantity}
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
