import React from "react"

function FilterProducts(props) {
  console.log(props)
  return (
    <div style={{ margin: "2rem 0" }} className="container">
      <a className="waves-effect waves-light red lighten-2 btn " onClick={() => props.allProducts()}>
        <i  className ="material-icons right"> all_inclusive</i>
        All Products
      </a>
      <a className="waves-effect waves-light red lighten-2 btn  " onClick={() => props.filterMenOnly()}>
        <i className="material-icons right ">person</i>men
      </a>
      <a className="waves-effect waves-light red lighten-2 btn " onClick={() => props.filterWomenOnly()}>
        <i className="material-icons right">pregnant_woman</i>Women
      </a>
      <a className="waves-effect waves-light red lighten-2 btn " onClick={() => props.filterElectronics()}>
        <i className="material-icons right">desktop_mac</i>Electronics
      </a>
      <a className="waves-effect waves-light red lighten-2 btn" onClick={() => props.filterJeweleries()}>
        <i className="material-icons right">watch</i>Jewelery
      </a>
    </div>
  )
}

export default FilterProducts
