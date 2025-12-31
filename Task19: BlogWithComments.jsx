import { useState, useEffect } from "react";

export default function BlogWithComments() {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  // Simulate real-time comments (like WebSocket polling)
  useEffect(() => {
    const interval = setInterval(() => {
      const demoUsers = ["Alex", "Riya", "John", "Meena"];
      const demoTexts = [
        "Great article!",
        "Very informative 👍",
        "Helped me a lot",
        "Nice explanation",
      ];

      const newComment = {
        id: Date.now(),
        author: demoUsers[Math.floor(Math.random() * demoUsers.length)],
        text: demoTexts[Math.floor(Math.random() * demoTexts.length)],
        time: new Date().toLocaleTimeString(),
      };

      setComments((prev) => [newComment, ...prev]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !text) return;

    const newComment = {
      id: Date.now(),
      author,
      text,
      time: new Date().toLocaleTimeString(),
    };

    setComments([newComment, ...comments]);
    setAuthor("");
    setText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Blog Section */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
          <h1 className="text-3xl font-bold mb-4">
            Building Modern Web Applications with React
          </h1>
          <p className="text-gray-600 mb-4">
            React helps developers create fast, scalable, and interactive user
            interfaces using reusable components and state management.
          </p>
          <p className="text-gray-700">
            In this blog, we explore how real-time features like comments and
            notifications improve user engagement in modern applications.
          </p>
        </div>

        {/* Comments Section */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3">Live Comments</h2>

          <form onSubmit={handleSubmit} className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="Your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border p-2 rounded-lg"
            />
            <textarea
              placeholder="Write a comment..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border p-2 rounded-lg"
              rows="2"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Post Comment
            </button>
          </form>

          <div className="space-y-3 max-h-64 overflow-y-auto">
            {comments.length === 0 && (
              <p className="text-sm text-gray-500">No comments yet</p>
            )}
            {comments.map((c) => (
              <div
                key={c.id}
                className="border p-2 rounded-lg bg-gray-50"
              >
                <p className="text-sm font-medium">{c.author}</p>
                <p className="text-sm">{c.text}</p>
                <span className="text-xs text-gray-500">{c.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
