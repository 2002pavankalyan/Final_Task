import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";

function Cart() {
  const { cart, dispatch } =
    useContext(CartContext);

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });

    toast.success(
      "Item removed from cart"
    );
  };

  const decreaseQty = (id) => {
    dispatch({
      type: "DECREASE",
      payload: id,
    });
  };

  const addQty = (item) => {
    dispatch({
      type: "ADD",
      payload: item,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR",
    });

    toast.success("Cart cleared");
  };

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>

        {cart.length > 0 && (
          <button
            className="remove-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>
            Your cart is empty 🛒
          </h2>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.title}
                className="cart-thumb"
              />

              <div className="cart-info">
                <h3>{item.title}</h3>

                <p>
                  $
                  {item.price.toFixed(
                    2
                  )}
                </p>
              </div>

              <div className="qty-box">
                <button
                  onClick={() =>
                    decreaseQty(item.id)
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    addQty(item)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeItem(item.id)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h2>
              Total: $
              {total.toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;