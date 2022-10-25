export default function Category({ category, icon, isSelected, handleSelect }) {
  const bgColor = isSelected ? "green" : "red";

  return (
    <button className={`waves-effect waves-light lighten-2 btn ${bgColor}`} onClick={handleSelect}>
      <i className="material-icons left">{icon}</i>
      {category}
    </button>
  );
}
