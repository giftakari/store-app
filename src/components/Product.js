import React from "react"

function Product({ product, removeItem }) {
  console.log(product)
  return (
    <div className="col s4 m4">
      <div className="card">
        <div className="card-image">
          <img src={product.image} width="100" alt={product.title.slice(0, 10)} />
          <span className="card-title">{product.title.slice(0, 6)}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red" alt={product.title}>
            <i className="material-icons">add</i>
          </a>
        </div>
        <div className="card-content">
          <p>{product.description.slice(0, 40)}</p>
        </div>
        <div className="card-content">
          <h6 className="waves-effect card-title" style={{color:"fff"}}>${product.price}</h6>
        </div>
        <div className="card-action">
          <a
            href="#"
            onClick={() => removeItem(product.id)}
            className="waves-effect red lighten-2
 btn"
          >
            Remove
            <i className="material-icons left">delete</i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Product
