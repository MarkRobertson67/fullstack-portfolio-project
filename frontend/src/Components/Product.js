
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <tr>
      <td>
        {product.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={product.url} target="_blank" rel="noreferrer">
          {product.name}
        </a>
      </td>
      <td>
        <Link to={`/products/${product.id}`}>🔍</Link>
      </td>
      <td>
      {product.is_vegan ? (
          <span>👍🏽</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      


    </tr>
  );
}

export default Product;