import React, { useState } from "react";

export default function OnlineWorkshop() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !workshop) {
      setError("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    alert("✅ Workshop Registration Successful!");
  };

  return (
    <div style={styles.container}>
      {/* Registration Form */}
      <div style={styles.card}>
        <h2 style={styles.heading}>📝 Workshop Registration</h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            style={styles.input}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            style={styles.input}
            value={workshop}
            onChange={(e) => setWorkshop(e.target.value)}
          >
            <option value="">Select Workshop</option>
            <option value="React Basics">React Basics</option>
            <option value="Web Design">Web Design</option>
            <option value="JavaScript Advanced">JavaScript Advanced</option>
          </select>

          {error && <p style={styles.error}>{error}</p>}

          <button style={styles.button} type="submit">
            Register
          </button>
        </form>
      </div>

      {/* Live Preview */}
      <div style={styles.preview}>
        <h2 style={styles.previewHeading}>👀 Live Preview</h2>
        <p><strong>Name:</strong> {name || "—"}</p>
        <p><strong>Email:</strong> {email || "—"}</p>
        <p><strong>Workshop:</strong> {workshop || "—"}</p>
      </div>
    </div>
  );
}

// 🎨 Internal CSS Styles
const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    padding: "20px"
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    width: "320px",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.3)"
  },
  heading: {
    textAlign: "center",
    color: "#764ba2",
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
    backgroundColor: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer"
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
    textAlign: "center"
  },
  preview: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    width: "300px",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.3)"
  },
  previewHeading: {
    color: "#667eea",
    marginBottom: "15px",
    textAlign: "center"
  }
};

