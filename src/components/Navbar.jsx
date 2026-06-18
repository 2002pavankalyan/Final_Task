import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="logo-link"
      >
        <h1 className="logo">
          ShopHub
        </h1>
      </Link>

      <div className="nav-links">
        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/products">
          Products
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        <NavLink
          to="/cart"
          className="cart-link"
        >
          Cart

          {totalItems > 0 && (
            <span className="cart-badge">
              {totalItems}
            </span>
          )}
        </NavLink>

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;