import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ProductNewForm() {
  
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


  
  const addProduct = (newProduct) => {
    axios
      .post(`${API}/products`, newProduct)
      .then(
        (response) => {
          navigate(`/products/${response.data.id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };


  const handleTextChange = (event) => {
    const { id, value } = event.target;
    if (id === "photo") {
      setProduct({ ...product, image_url: value });
    } else {
      setProduct({ ...product, [id]: value });
    }
  };
  

  const handleCheckboxChange = (event) => {
    // console.log(event.target.id)
    setProduct({ ...product, [event.target.id]: !product[event.target.id] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(product);
  };

  
  return (
    <div className="container" style={{ paddingTop: "150px" }}>
      <h1>Add a New Car</h1>
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
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                id="price"
                className="form-control"
                type="number"
                name="price"
                value={product.price}
                placeholder="How much"
                onChange={handleTextChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="photo">Photo:</label>
              <input
                id="photo"
                className="form-control"
                type="url"
                name="photo"
                value={product.image_url}
                placeholder="Enter a URL"
                onChange={handleTextChange}
                required
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
                placeholder="From 0 to 5"
                onChange={handleTextChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="year">Year:</label>
              <input
                id="year"
                className="form-control"
                type="number"
                name="year"
                value={product.year}
                placeholder="Enter year"
                onChange={handleTextChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mileage">Mileage:</label>
              <input
                id="mileage"
                className="form-control"
                type="number"
                name="mileage"
                value={product.mileage}
                placeholder="Enter mileage"
                onChange={handleTextChange}
                required
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
        <Link to={`/products`} className="btn btn-secondary ml-2">
          Nevermind!
        </Link>
      </form>
    </div>
  );

}

export default ProductNewForm;