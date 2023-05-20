
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';


function Product({ product }) {
  return (
    <Card className="card-wrapper" style={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.8)", height: "100%" }}>
      <Card.Img src={product.image_url} alt={product.name} className="card-img-top" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontSize: "18px", color:"maroon" }}>{product.name}</Card.Title>
        <Card.Text style={{ fontSize: "12px", maxHeight: "80px", overflow: "auto" }}>
          {product.description}
        </Card.Text>
        <div className="mt-auto">
          <Link to={`/products/${product.id}`} className="btn btn-secondary" style={{ fontSize: "12px", padding: "1px 5px" }}>
            Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;









