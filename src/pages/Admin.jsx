import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <div className="admin-menu">
        <Link to="add-product">
          <button>Add Product</button>
        </Link>

        <Link to="product-list">
          <button>Product List</button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Admin;