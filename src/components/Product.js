import React from "react";

function Product({ product, removeItem }) {
  return (
    <div className="col s4 m4">
      <div className="card">
        <div className="card-image">
          <img src={product.image} width="100" alt={product.title.slice(0, 10)} />
          <span className="card-title">{product.title.split(" ").slice(0, 2).join(" ")}</span>
          <button
            className="btn-floating halfway-fab waves-effect waves-light red"
            onClick={() => console.log(product.description)}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
        <div className="card-content">
          <p>{product.description.split(" ").slice(0, 10).join(" ")}</p>
        </div>
        <div className="card-content">
          <h6 className="waves-effect card-title" style={{ color: "fff" }}>
            ${product.price}
          </h6>
        </div>
        <div className="card-action">
          <button
            onClick={() => removeItem(product.id)}
            className="waves-effect red lighten-2
 btn"
          >
            Remove
            <i className="material-icons left">delete</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
