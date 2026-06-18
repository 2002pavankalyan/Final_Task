import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <h3>{product.title}</h3>

      <p className="price">
        ₹ {Math.round(product.price * 85)}
      </p>

      <div className="btn-group">
        <Link to={`/products/${product.id}`}>
          <button>View</button>
        </Link>

        <button onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;