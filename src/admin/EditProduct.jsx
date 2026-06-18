import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    const products =
      JSON.parse(localStorage.getItem("products")) || [];

    const existingProduct = products.find(
      (item) => item.id === Number(id)
    );

    if (existingProduct) {
      setProduct(existingProduct);
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const products =
      JSON.parse(localStorage.getItem("products")) || [];

    const updatedProducts = products.map((item) =>
      item.id === Number(id)
        ? { ...product, id: Number(id) }
        : item
    );

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    alert("Product Updated Successfully");

    navigate("/admin/product-list");
  };

  return (
    <div>
      <h2>Edit Product</h2>

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
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;