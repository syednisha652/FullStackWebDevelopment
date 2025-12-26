import React from "react";

export default function FlightBooking() {
  const bookTicket = () => {
    // Prompt for user name
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Booking cancelled: Name is required.");
      return;
    }

    // Prompt for destination
    const destination = prompt("Enter your destination:");
    if (!destination) {
      alert("Booking cancelled: Destination is required.");
      return;
    }

    // Prompt for number of tickets
    const tickets = prompt("Enter number of tickets:");
    if (!tickets || isNaN(tickets)) {
      alert("Booking cancelled: Invalid ticket number.");
      return;
    }

    // Confirmation dialog
    const confirmBooking = confirm(
      `Please confirm your booking:\n\nName: ${name}\nDestination: ${destination}\nTickets: ${tickets}`
    );

    if (confirmBooking) {
      alert("🎉 Booking Successful!\nHave a safe flight.");
    } else {
      alert("Booking Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✈️ Flight Ticket Booking</h1>
      <button onClick={bookTicket} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Book Ticket
      </button>
    </div>
  );
}

