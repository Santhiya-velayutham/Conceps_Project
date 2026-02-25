import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product Not Found ❌</h2>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        
        <img
          src={product.image}
          alt={product.name}
          className="detail-image"
        />

        <div className="detail-content">
          <h2>{product.name}</h2>
          <h3 className="detail-price">₹ {product.price}</h3>

          <p className="detail-description">
            {product.description}
          </p>

          <h4>Key Features:</h4>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>✔ {feature}</li>
            ))}
          </ul>

          <button className="buy-btn">
            Buy Now
          </button>

        </div>
      </div>
    </div>
  );
}