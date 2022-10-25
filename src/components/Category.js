import React from "react";

export default function Category({ category, isSelected, handleSelect }) {
  const bgColor = isSelected ? "green" : "red";

  return (
    <button className={`waves-effect waves-light lighten-2 btn ${bgColor}`} onClick={handleSelect}>
      {category}
    </button>
  );
}
