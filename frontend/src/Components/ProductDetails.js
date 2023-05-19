import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, [id]);

  const deleteProduct = () => {
    axios
      .delete(`${API}/products/${id}`)
      .then(
        () => {
          navigate(`/products`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleCancelClick = () => {
    setShowConfirm(false);
  };

  const handleConfirmClick = () => {
    deleteProduct();
    setShowConfirm(false);
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
  <div className="container text-center" style={{ paddingTop: "150px" }}>
    <h1
      className="text-center"
      style={{
        textAlign: "center",
        fontFamily: "Comic Sans MS, cursive",
        background: "linear-gradient(to right, blue, red)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Your Choice Car is....
    </h1>
    <article>
      <h3>
        {product.is_favorite ? <span>⭐️</span> : null} {product.name}
      </h3>

      <p style={{ marginBottom: "8px" }}>Rating: {product.rating} out of 5</p>
      <p style={{ marginBottom: "8px" }}>Description: {product.description}</p>
      <p style={{ marginBottom: "8px" }}>Price: {product.price ? formatter.format(product.price) : ''}</p>
      <p style={{ marginBottom: "8px" }}>Year: {product.year}</p>
      <p style={{ marginBottom: "8px" }}>Mileage: {product.mileage}</p>


      {product.image_url && (
        <img
          src={product.image_url}
          alt={product.name}
          style={{ width: "auto", height: "300px", objectFit: "contain" }}
        />
      )}

      <div className="row text-center">
        <div className="col-md-4 mx-auto">
          <Link to={`/products`} className="btn btn-primary btn-sm">
            Back
          </Link>
          <Link
            to={`/products/${id}/edit`}
            className="btn btn-primary btn-sm"
          >
            Edit
          </Link>
          <button
            onClick={handleDeleteClick}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
          {showConfirm && (
            <div className="confirm">
              <p>Are you sure you want to delete this car?</p>
              <button
                onClick={handleConfirmClick}
                className="btn btn-danger btn-sm"
              >
                Yes
              </button>
              <button
                onClick={handleCancelClick}
                className="btn btn-secondary btn-sm"
              >
                No
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
    <br />
    {/* <Reviews product={product} /> */}
  </div>
);
}

export default ProductDetails;