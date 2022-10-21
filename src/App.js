import logo from "./logo.svg"
import "./App.css"
import { useEffect, useState } from "react"
import Header from "./components/Header"
// Import Materialize
import M from "materialize-css"

function App() {
  M.AutoInit()

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json))
  }, [])

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
