import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
// Import Materialize
import M from "materialize-css";
import Product from "./components/Product";
import Loading from "./components/Loading";
import Category from "./components/Category";

const CATEGORIES = [
  { category: "all products", icon: "menu" },
  { category: "electronics", icon: "devices" },
  { category: "jewelery", icon: "diamond" },
  { category: "men's clothing", icon: "man" },
  { category: "women's clothing", icon: "woman" },
];

function App() {
  // Initialize material css
  M.AutoInit();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all products");

  function removeItem(id) {
    setFilteredProducts(filteredProducts.filter((product) => product.id !== id));
  }
  function clearFilters() {
    setSelectedCategory("all products");
    setSearch("");
  }

  useEffect(() => {
    setFilteredProducts(
      products
        .filter(
          (product) => product.category === selectedCategory || selectedCategory === "all products"
        )
        .filter((product) => product.title.match(RegExp(search, "i")))
    );
  }, [selectedCategory, search, products]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container" style={{ marginTop: "2rem" }}>
        <div style={{ margin: "2rem 0" }} className="container">
          {CATEGORIES.map(({ category, icon }) => (
            <Category
              key={category}
              category={category}
              icon={icon}
              isSelected={selectedCategory === category}
              handleSelect={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        <div className="input-field">
          <input
            id="search"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <label htmlFor="search">Search</label>
        </div>

        <button
          className="waves-effect waves-light lighten-2 red btn"
          style={{ marginBottom: "2rem" }}
          onClick={clearFilters}
        >
          <i className="material-icons left">close</i>
          Clear
        </button>

        <div className="row">
          {loading ? (
            <Loading />
          ) : (
            filteredProducts.map((product) => (
              <Product product={product} key={product.id} removeItem={removeItem} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
