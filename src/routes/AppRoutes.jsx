import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";

import AddProduct from "../admin/AddProduct";
import ProductList from "../admin/ProductList";
import EditProduct from "../admin/EditProduct";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* Nested Routing */}

      <Route
        path="/admin"
        element={<Admin />}
      >
        <Route
          path="add-product"
          element={<AddProduct />}
        />

        <Route
          path="product-list"
          element={<ProductList />}
        />

        <Route
          path="edit-product/:id"
          element={<EditProduct />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;