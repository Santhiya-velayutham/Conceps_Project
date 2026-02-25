import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductList() {
  return (
    <div className="product-grid">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            className="product-img"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x200";
            }}
          />

          <div className="product-body">
            <div className="product-title">{item.name}</div>
            <div className="product-price">₹ {item.price}</div>

          <Link to={`/dashboard/products/${item.id}`} className="product-btn">
  View Details
</Link>
          </div>
        </div>
      ))}
    </div>
  );
}