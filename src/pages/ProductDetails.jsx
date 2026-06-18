import {
  useParams,
} from "react-router-dom";
import {
  useContext,
  useEffect,
  useState,
} from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";

function ProductDetails() {
  const { id } =
    useParams();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const { dispatch } =
    useContext(CartContext);

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products/${id}`
    )
      .then((res) =>
        res.json()
      )
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() =>
        setLoading(false)
      );
  }, [id]);

  const addToCart = () => {
    dispatch({
      type: "ADD",
      payload: product,
    });

    toast.success(
      "Added to cart"
    );
  };

  if (loading) {
    return (
      <div className="container">
        <h2>
          Loading Product...
        </h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container">
        <h2>
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="product-details">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="details-image"
          />
        </div>

        <div>
          <span className="category">
            {
              product.category
            }
          </span>

          <h1>
            {product.title}
          </h1>

          <p className="details-price">
            $
            {product.price}
          </p>

          <p>
            {
              product.description
            }
          </p>

          <div className="rating">
            ⭐
            {
              product.rating
                ?.rate
            }
          </div>

          <button
            className="cart-btn"
            onClick={addToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;