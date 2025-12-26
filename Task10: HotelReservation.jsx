import React from "react";

export default function HotelReservation() {
  const reserveRoom = () => {
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Reservation cancelled: Name is required.");
      return;
    }

    const roomType = prompt("Enter room type (Single / Double / Deluxe):");
    if (!roomType) {
      alert("Reservation cancelled: Room type is required.");
      return;
    }

    const days = prompt("Enter number of days to stay:");
    if (!days || isNaN(days)) {
      alert("Reservation cancelled: Invalid number of days.");
      return;
    }

    const confirmReservation = confirm(
      `Confirm your reservation:\n\n` +
      `Guest Name: ${name}\n` +
      `Room Type: ${roomType}\n` +
      `Days: ${days}`
    );

    if (confirmReservation) {
      alert("🏨 Reservation Successful!\nEnjoy your stay!");
    } else {
      alert("Reservation Cancelled.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🏨 Hotel Reservation System</h1>
        <p style={styles.text}>
          Book your stay easily using dialog boxes
        </p>
        <button style={styles.button} onClick={reserveRoom}>
          Reserve Room
        </button>
      </div>
    </div>
  );
}

// 🎨 Internal CSS Styling
const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.3)"
  },
  heading: {
    color: "#764ba2",
    marginBottom: "10px"
  },
  text: {
    color: "#555",
    marginBottom: "20px"
  },
  button: {
    backgroundColor: "#667eea",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "25px",
    cursor: "pointer"
  }
};

