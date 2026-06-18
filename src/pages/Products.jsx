import {
  useMemo,
  useState,
} from "react";

import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("all");

  const {
    data,
    loading,
    error,
  } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const filteredProducts =
    useMemo(() => {
      return data.filter((product) => {
        const matchSearch =
          product.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchCategory =
          category === "all"
            ? true
            : product.category ===
              category;

        return (
          matchSearch &&
          matchCategory
        );
      });
    }, [data, search, category]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="container">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <>
      <section className="products-banner">
        <h1>Our Products</h1>

        <p>
          Discover Amazing Deals
        </p>
      </section>

      <div className="container">
        <div className="filters">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="search-box"
          />

          <div className="category-bar">
            <button
              onClick={() =>
                setCategory("all")
              }
            >
              All
            </button>

            <button
              onClick={() =>
                setCategory(
                  "electronics"
                )
              }
            >
              Electronics
            </button>

            <button
              onClick={() =>
                setCategory(
                  "jewelery"
                )
              }
            >
              Jewelery
            </button>

            <button
              onClick={() =>
                setCategory(
                  "men's clothing"
                )
              }
            >
              Men's Clothing
            </button>

            <button
              onClick={() =>
                setCategory(
                  "women's clothing"
                )
              }
            >
              Women's Clothing
            </button>
          </div>
        </div>

        <div className="grid">
          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Products;