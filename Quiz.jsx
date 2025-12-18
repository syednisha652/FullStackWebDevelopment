import { useState } from "react";

const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language is used for React?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What is 5 + 3?",
    options: ["5", "8", "10", "15"],
    answer: "8",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === questionsData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Online Quiz</h2>

      {showResult ? (
        <div>
          <h3>Quiz Completed 🎉</h3>
          <p>
            Your Score: {score} / {questionsData.length}
          </p>
        </div>
      ) : (
        <>
          <h4>
            Question {currentQuestion + 1} of {questionsData.length}
          </h4>
          <p>{questionsData[currentQuestion].question}</p>

          {questionsData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              style={styles.button}
            >
              {option}
            </button>
          ))}

          <p style={styles.score}>Score: {score}</p>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
     background: "linear-gradient(135deg, #D48FCC, #C1A2C9)",
  },
  button: {
     width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#D7D1DB",
    color: "black",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
  score: {
     fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default Quiz;
