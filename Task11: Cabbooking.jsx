import React from "react";

export default function CabBooking() {
  const bookCab = () => {
    // Customer name
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    // Pickup location
    const pickup = prompt("Enter pickup location:");
    if (!pickup) {
      alert("Booking cancelled: Pickup location is required.");
      return;
    }

    // Drop location
    const drop = prompt("Enter drop location:");
    if (!drop) {
      alert("Booking cancelled: Drop location is required.");
      return;
    }

    // Distance
    const distance = prompt("Enter distance (in km):");
    if (!distance || isNaN(distance)) {
      alert("Booking cancelled: Invalid distance.");
      return;
    }

    // Simple fare calculation
    const fare = distance * 12;

    // Confirmation
    const confirmBooking = confirm(
      `🚕 Confirm Cab Booking\n\n` +
      `Name: ${name}\n` +
      `Pickup: ${pickup}\n` +
      `Drop: ${drop}\n` +
      `Distance: ${distance} km\n` +
      `Fare: ₹${fare}`
    );

    if (confirmBooking) {
      alert("✅ Cab Booked Successfully!\nYour driver will arrive soon.");
    } else {
      alert("Cab booking cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🚕 Online Cab Booking</h1>
        <p style={styles.text}>
          Book a cab instantly using dialog boxes
        </p>
        <button style={styles.button} onClick={bookCab}>
          Book Cab
        </button>
      </div>
    </div>
  );
}

// 🎨 Internal CSS Styles
const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    width: "360px",
    textAlign: "center",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.3)"
  },
  heading: {
    color: "#ff6f61",
    marginBottom: "10px"
  },
  text: {
    color: "#555",
    marginBottom: "20px"
  },
  button: {
    backgroundColor: "#ff6f61",
    color: "#fff",
    border: "none",
    padding: "12px 30px",
    fontSize: "16px",
    borderRadius: "30px",
    cursor: "pointer"
  }
};
