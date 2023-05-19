import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";

const API = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.warn("catch", error));
  }, []);

  return (
    <div className="container" style={{ paddingTop: "150px" }}>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
