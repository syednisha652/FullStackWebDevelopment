import { useState } from "react";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("students");

  const students = [
    { id: 1, name: "Aarav", course: "Computer Science", year: 2 },
    { id: 2, name: "Nisha", course: "Information Technology", year: 3 },
    { id: 3, name: "Rahul", course: "Electronics", year: 1 },
  ];

  const renderContent = () => {
    if (activeTab === "students") {
      return (
        <div>
          <h2 className="text-xl font-semibold mb-4">Student List</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Course</th>
                <th className="border p-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id} className="text-center">
                  <td className="border p-2">{s.id}</td>
                  <td className="border p-2">{s.name}</td>
                  <td className="border p-2">{s.course}</td>
                  <td className="border p-2">{s.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (activeTab === "dashboard") {
      return (
        <div>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-xl">
              <p className="text-sm">Total Students</p>
              <p className="text-2xl font-bold">{students.length}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-xl">
              <p className="text-sm">Courses</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-xl">
              <p className="text-sm">Active Year</p>
              <p className="text-2xl font-bold">2025</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white shadow p-4">
        <h1 className="text-lg font-bold mb-6">Student Manager</h1>
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full text-left p-2 rounded-lg ${
              activeTab === "dashboard"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("students")}
            className={`w-full text-left p-2 rounded-lg ${
              activeTab === "students"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Students
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{renderContent()}</main>
    </div>
  );
}
