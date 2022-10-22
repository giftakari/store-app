import React from "react"

function FilterProducts(props) {
  console.log(props)
  return (
    <div style={{ margin: "2rem" }}>
      <a className="waves-effect waves-light red lighten-2 btn" onClick={() => props.allProducts()}>
        All Products
      </a>
      <a className="waves-effect waves-light red lighten-2 btn" onClick={() => props.filterMenOnly()}>
        <i className="material-icons left ">cloud</i>Men
      </a>
      <a className="waves-effect waves-light red lighten-2 btn" onClick={() => props.filterWomenOnly()}>
        <i className="material-icons right">cloud</i>Women
      </a>
    </div>
  )
}

export default FilterProducts
