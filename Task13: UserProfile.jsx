import React, { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !age) {
      setError("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (isNaN(age) || age <= 0) {
      setError("Please enter a valid age.");
      return;
    }

    setError("");
    alert("✅ Profile Updated Successfully!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>👤 Edit User Profile</h1>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            style={styles.input}
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button style={styles.button} type="submit">
            Update Profile
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
    background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "35px",
    borderRadius: "18px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.3)"
  },
  heading: {
    color: "#ff7a18",
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
    backgroundColor: "#ff7a18",
    color: "#fff",
    border: "none",
    padding: "12px",
    width: "100%",
    fontSize: "16px",
    borderRadius: "25px",
    cursor: "pointer"
  },
  error: {
    color: "red",
    marginBottom: "10px",
    fontSize: "14px"
  }
};

