import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";

import { CartProvider } from "./context/CartContext";
import { DetailsProvider } from "./context/details";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <DetailsProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/products"
              element={<Products />}
            />

            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            >
              <Route
                path="users"
                element={<Users />}
              />

              <Route
                path="orders"
                element={<Orders />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </DetailsProvider>
    </CartProvider>
  );
}

export default App;