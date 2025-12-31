import { useState } from "react";

export default function StudentFeedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || comment.trim() === "") {
      alert("Please provide a rating and a comment.");
      return;
    }

    const newFeedback = {
      id: Date.now(),
      rating,
      comment,
    };

    setFeedbackList([newFeedback, ...feedbackList]);
    setRating(0);
    setComment("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Student Feedback System
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setRating(num)}
                  className={`px-3 py-1 rounded-lg border ${
                    rating >= num
                      ? "bg-yellow-400 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Comments</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border rounded-lg p-2"
              rows="3"
              placeholder="Write your feedback here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Submitted Feedback</h2>
          {feedbackList.length === 0 && (
            <p className="text-gray-500">No feedback yet.</p>
          )}

          <ul className="space-y-3">
            {feedbackList.map((item) => (
              <li
                key={item.id}
                className="border rounded-lg p-3 bg-gray-50"
              >
                <p className="font-medium">Rating: {item.rating} ⭐</p>
                <p className="text-sm text-gray-700">{item.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
