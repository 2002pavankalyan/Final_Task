import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import useFetchProducts from "../hooks/useFetchProducts";
import { CartContext } from "../context/CartContext";

function Products() {
  const products = useFetchProducts(
    "https://fakestoreapi.com/products"
  );

  const { addToCart } = useContext(CartContext);

  const [searchParams] = useSearchParams();

  const search =
    searchParams.get("search")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  return (
    <div className="container">
      <h1>Products</h1>

      <SearchBar />

      {products.length === 0 ? (
        <Loader />
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;