import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";

const API = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.warn("Error", error));

  }, []);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortProducts = (products) => {
    switch (selectedFilter) {
      case "rating":
        return products.sort((a, b) => sortOrder === "ascending" ? a.rating - b.rating : b.rating - a.rating);
      case "price":
        return products.sort((a, b) => sortOrder === "ascending" ? a.price - b.price : b.price - a.price);
      case "year":
        return products.sort((a, b) => sortOrder === "ascending" ? a.year - b.year : b.year - a.year);
      case "mileage":
        return products.sort((a, b) => sortOrder === "ascending" ? a.mileage - b.mileage : b.mileage - a.mileage);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(products);

  return (
    <div className="container" style={{ paddingTop: "110px" }}>
      <div className="row mb-4">
        <div className="col">
          <select value={selectedFilter} onChange={handleFilterChange} style={{
              marginRight: "10px",
              fontSize: "14px",
              padding: "5px",
              borderRadius: "4px",
              color: "#fff", 
              backgroundColor: "#333", 
            }}>
            <option value="default">Sort by...</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
            <option value="year">Year</option>
            <option value="mileage">Mileage</option>
          </select>
          <select value={sortOrder} onChange={handleSortOrderChange} style={{
              fontSize: "14px",
              padding: "5px",
              borderRadius: "4px",
              color: "#fff", 
              backgroundColor: "#333", 
            }}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
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



