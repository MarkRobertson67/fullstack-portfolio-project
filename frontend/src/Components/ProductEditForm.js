import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

function ProductEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    is_favorite: false,
    image_url: "",
    year: "",
    mileage: "",
  });

  const updateProduct = (updatedProduct) => {
    axios
      .put(`${API}/products/${id}`, updatedProduct)
      .then(() => {
        navigate(`/products/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleTextChange = (event) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [event.target.id]: event.target.value,
    }));
  };

  const handleCheckboxChange = (event) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [event.target.id]: !prevProduct[event.target.id],
    }));
  };

  useEffect(() => {
    axios.get(`${API}/products/${id}`).then(
      (response) => setProduct(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(product, id);
  };


  return (
    <div className="container" style={{ paddingTop: "150px" }}>
      <h1>Edit this Car</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                className="form-control"
                value={product.name}
                type="text"
                onChange={handleTextChange}
                placeholder="Name of Car"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Description:</label>
              <input
                id="description"
                className="form-control"
                type="text"
                name="description"
                value={product.description}
                placeholder="Tell us all about the car..."
                onChange={handleTextChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="calories">Price:</label>
              <input
                id="price"
                className="form-control"
                type="number"
                name="price"
                value={product.price}
                onChange={handleTextChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="photo">Photo:</label>
              <input
                id="photo"
                className="form-control"
                type="text"
                name="photo"
                value={product.image_url}
                onChange={handleTextChange}
              />
            </div>



          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <input
                id="rating"
                className="form-control"
                type="number"
                name="rating"
                value={product.rating}
                onChange={handleTextChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="calories">Year:</label>
              <input
                id="year"
                className="form-control"
                type="number"
                name="calories"
                value={product.year}
                onChange={handleTextChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="calories">Mileage:</label>
              <input
                id="mileage"
                className="form-control"
                type="number"
                name="mileage"
                value={product.mileage}
                onChange={handleTextChange}
              />
            </div>


          </div>
        </div>


        <div className="form-group form-check">
          <input
            id="is_favorite"
            className="form-check-input"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={product.is_favorite}
          />
          <label htmlFor="is_favorite" className="form-check-label">
            Favorite
          </label>
        </div>

        <br />

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to={`/products/${id}`} className="btn btn-secondary ml-2">
          Nevermind!
        </Link>
      </form>
    </div>
  );

}

export default ProductEditForm;