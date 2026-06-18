import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";

function ProductCard({ product }) {
  const { dispatch } =
    useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD",
      payload: product,
    });

    toast.success(
      "Added to cart successfully"
    );
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />

      <span className="category">
        {product.category}
      </span>

      <h3 className="product-title">
        {product.title}
      </h3>

      <div className="rating">
        ⭐ {product.rating?.rate}
      </div>

      <p className="price">
        ${product.price}
      </p>

      <div className="card-buttons">
        <button
          className="cart-btn"
          onClick={addToCart}
        >
          Add Cart
        </button>

        <Link
          to={`/product/${product.id}`}
          className="details-btn"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;