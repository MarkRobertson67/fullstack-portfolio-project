import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";

const API = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("default");

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.warn("Error", error));

  }, []);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const sortProducts = (products) => {
    switch (selectedFilter) {
      case "rating":
        return products.sort((a, b) => b.rating - a.rating);
      case "price":
        return products.sort((a, b) => b.price - a.price);
      case "year":
        return products.sort((a, b) => b.year - a.year);
      case "mileage":
        return products.sort((a, b) => a.mileage - b.mileage);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(products);

  return (
    <div className="container" style={{ paddingTop: "110px" }}>
      <div className="row mb-4">
        <div className="col">
          <select value={selectedFilter} onChange={handleFilterChange}>
            <option value="default">Sort by...</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
            <option value="year">Year</option>
            <option value="mileage">Mileage</option>
          </select>
        </div>
      </div>
      <div className="row">
        {sortedProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;


