import { useState, useEffect } from "react";
import { Bell } from "lucide-react";

export default function NotificationDashboard() {
  const [notifications, setNotifications] = useState([]);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // Simulate incoming notifications every 5 seconds
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        message: getRandomMessage(),
        time: new Date().toLocaleTimeString(),
        read: false,
      };

      setNotifications((prev) => [newNotification, ...prev]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getRandomMessage = () => {
    const messages = [
      "New student registered",
      "Assignment submitted",
      "System update available",
      "Feedback received",
      "New announcement posted",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const clearAll = () => setNotifications([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-end">
        <button
          onClick={() => setShowPanel(!showPanel)}
          className="relative bg-white p-3 rounded-full shadow"
        >
          <Bell />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-2 rounded-full">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {showPanel && (
        <div className="absolute right-6 mt-4 w-80 bg-white rounded-2xl shadow-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold">Notifications</h2>
            <button
              onClick={clearAll}
              className="text-sm text-blue-600"
            >
              Clear all
            </button>
          </div>

          {notifications.length === 0 && (
            <p className="text-gray-500 text-sm">No notifications</p>
          )}

          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {notifications.map((n) => (
              <li
                key={n.id}
                className={`p-2 rounded-lg cursor-pointer ${
                  n.read ? "bg-gray-100" : "bg-blue-50"
                }`}
                onClick={() => markAsRead(n.id)}
              >
                <p className="text-sm">{n.message}</p>
                <span className="text-xs text-gray-500">{n.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <h1 className="text-2xl font-semibold mt-10">Dashboard</h1>
      <p className="text-gray-600 mt-2">
        Notifications are simulated every 5 seconds.
      </p>
    </div>
  );
}
