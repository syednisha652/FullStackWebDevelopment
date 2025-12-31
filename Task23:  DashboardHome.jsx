import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function DashboardHome() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <p className="text-gray-600">Welcome to the student dashboard.</p>
    </div>
  );
}

function Students() {
  const students = [
    { id: 1, name: "Aarav", course: "CSE" },
    { id: 2, name: "Nisha", course: "IT" },
    { id: 3, name: "Rahul", course: "ECE" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Students</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="text-center">
              <td className="border p-2">{s.id}</td>
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Courses</h2>
      <ul className="list-disc ml-6">
        <li>Computer Science</li>
        <li>Information Technology</li>
        <li>Electronics</li>
      </ul>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <p>Name: Student User</p>
      <p>Role: Student</p>
    </div>
  );
}

export default function StudentDashboardApp() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar Navigation */}
        <aside className="w-56 bg-white shadow p-4">
          <h1 className="text-lg font-bold mb-6">Student Portal</h1>
          <nav className="space-y-2">
            <Link to="/" className="block p-2 rounded hover:bg-gray-100">Dashboard</Link>
            <Link to="/students" className="block p-2 rounded hover:bg-gray-100">Students</Link>
            <Link to="/courses" className="block p-2 rounded hover:bg-gray-100">Courses</Link>
            <Link to="/profile" className="block p-2 rounded hover:bg-gray-100">Profile</Link>
          </nav>
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
