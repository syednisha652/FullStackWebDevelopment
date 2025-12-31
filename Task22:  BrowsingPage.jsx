import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const products = {
  electronics: [
    { id: 1, name: "Headphones" },
    { id: 2, name: "Smartphone" },
  ],
  clothing: [
    { id: 3, name: "T-Shirt" },
    { id: 4, name: "Jeans" },
  ],
  books: [
    { id: 5, name: "React Guide" },
    { id: 6, name: "JavaScript Basics" },
  ],
};

function CategoryPage() {
  const { category } = useParams();
  const items = products[category] || [];

  return (
    <div>
      <h2 className="text-xl font-semibold capitalize mb-4">{category}</h2>
      {items.length === 0 && <p>No products found.</p>}
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="border p-2 rounded-lg bg-gray-50"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select a Category</h2>
      <p className="text-gray-600">
        Choose a category from the navigation menu to browse products.
      </p>
    </div>
  );
}

export default function ProductBrowser() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow p-4 flex gap-4">
          <Link to="/" className="font-semibold">
            Home
          </Link>
          <Link to="/category/electronics">Electronics</Link>
          <Link to="/category/clothing">Clothing</Link>
          <Link to="/category/books">Books</Link>
        </nav>

        {/* Page Content */}
        <main className="p-6 max-w-4xl mx-auto bg-white mt-6 rounded-2xl shadow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
