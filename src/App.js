import "./App.css"
import { useEffect, useState } from "react"
import Header from "./components/Header"
// Import Materialize
import M from "materialize-css"
import Product from "./components/Product"
import Loading from "./components/Loading"
import FilterProducts from "./components/FilterProducts"

function App() {
  // Initialize material css
  M.AutoInit()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  // Pass  the value of products to filtered products
  // Better way to reduce fetching data from the server multiple times

  const [filteredProducts, setFilteredProducts] = useState([])

  const removeItem = (id) => {
    console.log(id)
    setFilteredProducts(filteredProducts.filter((product) => product.id != id))
  }

  const filterMenOnly = () => {
    console.log("click")

    const menProducts = [...products.filter((product) => product.category === "men's clothing")]
    setFilteredProducts(menProducts)
  }

  const filterWomenOnly = () => {
    const womenProducts = [...products.filter((product) => product.category === "women's clothing")]
    setFilteredProducts(womenProducts)
  }

  const filterElectronics = () => {
    const electronicProducts = [...products.filter((product) => product.category === "electronics")]
    setFilteredProducts(electronicProducts)
  }

  const filterJeweleries = () => {
    const jeweleriesProducts = [...products.filter((product) => product.category === "jewelery")]
    setFilteredProducts(jeweleriesProducts)
  }

  const allProducts = () => {
    return setFilteredProducts(products)
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
        setFilteredProducts(data)
      })
      .catch((err) => {
        console.log(err)
        setLoading(true)
      })
  }, [])

  return (
    <div>
      <Header />
      <div className="container" style={{ marginTop: "2rem" }}>
        {/* Component to filter the items on render */}
        <FilterProducts filterMenOnly={filterMenOnly} filterWomenOnly={filterWomenOnly} allProducts={allProducts} filterElectronics={filterElectronics} filterJeweleries={filterJeweleries} />

        {/*** if Loading  render loading componnent else render
         * render the products
         */}
        <div className="row">{loading ? <Loading /> : filteredProducts.map((product) => <Product product={product} key={product.id} removeItem={removeItem} filterMenOnly={filterMenOnly} filterWomenOnly={filterWomenOnly} />)}</div>
      </div>
    </div>
  )
}

export default App
