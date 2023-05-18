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
    .catch((error) => console.warn("catch", error))
  }, []);

  return (
    <div className="container my-5">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark"> 
     
          <tr>
            <th>Favorite</th>
            <th>Car</th>
            <th>See this Car</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Products;