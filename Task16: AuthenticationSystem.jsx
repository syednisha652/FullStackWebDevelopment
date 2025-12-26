import React, { useState } from "react";

export default function AuthenticationSystem() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Hardcoded credentials (demo purpose)
  const validUsername = "admin";
  const validPassword = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("❌ Error: All fields are required.");
      return;
    }

    if (username === validUsername && password === validPassword) {
      alert("✅ Login Successful!");
      setIsLoggedIn(true);
    } else {
      alert("❌ Invalid username or password.");
    }
  };

  if (isLoggedIn) {
    return (
      <div style={styles.dashboard}>
        <h1>🎉 Welcome, {username}!</h1>
        <p>You have successfully logged in.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🔐 User Login</h2>

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

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// 🎨 Internal CSS Styles
const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #ff512f, #dd2476)",
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
    color: "#dd2476",
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
    backgroundColor: "#ff512f",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer"
  },
  dashboard: {
    height: "100vh",
    background: "linear-gradient(135deg, #1d976c, #93f9b9)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px"
  }
};

