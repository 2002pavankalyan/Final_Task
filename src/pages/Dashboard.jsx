import {
  NavLink,
  Outlet,
} from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>

        <NavLink
          to="users"
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          👥 Users
        </NavLink>

        <NavLink
          to="orders"
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          📦 Orders
        </NavLink>
      </div>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;