import React from "react";

export default function EventRegistration() {
  const registerEvent = () => {
    // Get user details
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Registration failed: Name is required.");
      return;
    }

    const email = prompt("Enter your email ID:");
    if (!email) {
      alert("Registration failed: Email is required.");
      return;
    }

    const eventName = prompt("Enter event name:");
    if (!eventName) {
      alert("Registration failed: Event name is required.");
      return;
    }

    // Confirmation alert
    const confirmRegistration = confirm(
      `🎉 Confirm Event Registration\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Event: ${eventName}`
    );

    if (confirmRegistration) {
      alert("✅ Registration Successful!\nThank you for registering.");
    } else {
      alert("Registration Cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🎊 Event Registration</h1>
        <p style={styles.text}>
          Register for your favorite event easily
        </p>
        <button style={styles.button} onClick={registerEvent}>
          Register Now
        </button>
      </div>
    </div>
  );
}

// 🎨 Internal CSS Styles
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
    width: "380px",
    textAlign: "center",
    boxShadow: "0px 12px 30px rgba(0,0,0,0.3)"
  },
  heading: {
    color: "#185a9d",
    marginBottom: "10px"
  },
  text: {
    color: "#555",
    marginBottom: "25px"
  },
  button: {
    backgroundColor: "#a4e9d3ff",
    color: "#fff",
    border: "none",
    padding: "12px 32px",
    fontSize: "16px",
    borderRadius: "30px",
    cursor: "pointer"
  }
};
