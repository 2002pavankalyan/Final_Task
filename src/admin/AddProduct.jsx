import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !product.title ||
      !product.price ||
      !product.image ||
      !product.category
    ) {
      setMessage("All fields are required");
      return;
    }

    const products =
      JSON.parse(localStorage.getItem("products")) || [];

    const newProduct = {
      id: Date.now(),
      ...product,
    };

    products.push(newProduct);

    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );

    setMessage("Product Added Successfully");

    setProduct({
      title: "",
      price: "",
      image: "",
      category: "",
    });
  };

  return (
    <div>
      <h2>Add Product</h2>

      {message && (
        <p style={{ color: "green" }}>{message}</p>
      )}

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          placeholder="Product Name"
          value={product.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <button className="btn">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;