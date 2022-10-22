import "./App.css"
import { useEffect, useState } from "react"
import Header from "./components/Header"
// Import Materialize
import M from "materialize-css"
import Product from "./components/Product"
import Loading from "./components/Loading"

function App() {
  M.AutoInit()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const removeItem = (id) => {
    console.log(id)
    setProducts(products.filter((product) => product.id != id))
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

      <div className="container">
        <div className="row">{loading ? <Loading /> : products.map((product) => <Product product={product} key={product.id} removeItem={removeItem} />)}</div>
      </div>
    </div>
  )
}

export default App
