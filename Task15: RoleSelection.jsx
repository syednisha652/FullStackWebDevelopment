import React, { useState } from "react";

export default function RoleSelection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [page, setPage] = useState("login");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password || !role) {
      setError("All fields are required.");
      return;
    }

    setError("");

    if (role === "admin") {
      alert("✅ Admin Login Successful");
      setPage("admin");
    } else if (role === "user") {
      alert("✅ User Login Successful");
      setPage("user");
    }
  };

  // 🔄 Admin Dashboard
  if (page === "admin") {
    return (
      <div style={styles.dashboard}>
        <h1>👑 Admin Dashboard</h1>
        <p>Welcome, {username}!</p>
      </div>
    );
  }

  // 🔄 User Dashboard
  if (page === "user") {
    return (
      <div style={styles.dashboard}>
        <h1>🙋 User Dashboard</h1>
        <p>Welcome, {username}!</p>
      </div>
    );
  }

  // 🔐 Login Page
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🔐 Login</h2>

        <form onSubmit={handleLogin}>
          <input
            style={styles.input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            style={styles.input}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          {error && <p style={styles.error}>{error}</p>}

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// 🎨 Internal CSS
const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "35px",
    borderRadius: "18px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.3)"
  },
  heading: {
    color: "#185a9d",
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#43cea2",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer"
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px"
  },
  dashboard: {
    height: "100vh",
    background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px"
  }
};
