import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } =
    useContext(CartContext);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              width="80"
            />

            <div>
              <h4>{item.title}</h4>

              <p>
                ₹ {Math.round(item.price * 85)}
              </p>
            </div>

            <button
              className="delete-btn"
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;