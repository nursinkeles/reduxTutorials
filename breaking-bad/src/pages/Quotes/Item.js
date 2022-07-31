export const Item = ({ item }) => {
  return (
    <div style={{ padding: "10px 0" }}>
      <q>{item.quote}</q> <strong>{item.author}</strong>
    </div>
  );
};
