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

  const removeItem = (id) => {
    console.log(id)
    setProducts(products.filter((product) => product.id != id))
  }

  const filterMenOnly = () => {
    console.log("click")

    const menProducts = [...products.filter((product) => product.category === "men's clothing")]
    setProducts(menProducts)
  }

  const filterWomenOnly = () => {
    const womenProducts = [...products.filter((product) => product.category === "women's clothing")]
    setProducts(womenProducts)
  }
  const allProducts = () => {
    return setProducts(products)
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
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
        <FilterProducts filterMenOnly={filterMenOnly} filterWomenOnly={filterWomenOnly} allProducts={allProducts} />
        <div className="row">{loading ? <Loading /> : products.map((product) => <Product product={product} key={product.id} removeItem={removeItem} filterMenOnly={filterMenOnly} filterWomenOnly={filterWomenOnly} />)}</div>
      </div>
    </div>
  )
}

export default App
