export default function Contact({ name, number, onDelete }) {
  return (
    <div>
      <p>👤 {name}</p>
      <p>📞 {number}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
