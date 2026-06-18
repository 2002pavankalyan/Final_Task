import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    "Rahul Sharma",
    "Priya Reddy",
    "Arjun Kumar",
  ]);

  const [name, setName] = useState("");

  const addUser = () => {
    if (!name.trim()) return;

    setUsers([...users, name]);
    setName("");
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="users-page">
      <h1>Users</h1>
      <p className="users-subtitle">
        Manage all registered users
      </p>

      <div className="user-input-section">
        <input
          type="text"
          placeholder="Add new user..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="add-user-btn"
          onClick={addUser}
        >
          + Add User
        </button>
      </div>

      <div className="users-list">
        {users.map((user, index) => (
          <div
            key={index}
            className="user-card"
          >
            <div className="user-left">
              <div className="user-avatar">
                👤
              </div>

              <h3>{user}</h3>
            </div>

            <button
              className="delete-user-btn"
              onClick={() =>
                deleteUser(index)
              }
            >
             🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;