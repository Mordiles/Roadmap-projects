import { useState } from "react";
import "./App.css";

function App() {
  const flashcards = [
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "What is JSX?",
      answer:
        "A syntax extension that lets you write HTML-like code inside JavaScript.",
    },
    {
      id: 3,
      question: "What is a React component?",
      answer: "A reusable piece of UI that returns JSX.",
    },
    {
      id: 4,
      question: "What does useState do?",
      answer: "It lets you add state to a functional component.",
    },
    {
      id: 5,
      question: "What does useEffect do?",
      answer:
        "It lets you perform side effects like fetching data or setting timers.",
    },
    {
      id: 6,
      question: "What are props?",
      answer:
        "Props are values passed from a parent component to a child component.",
    },
    {
      id: 7,
      question: "What is state?",
      answer:
        "State is data that belongs to a component and can change over time.",
    },
    {
      id: 8,
      question: "What is the virtual DOM?",
      answer:
        "A lightweight copy of the real DOM that React uses to optimize updates.",
    },
    {
      id: 9,
      question: "What is conditional rendering?",
      answer: "Displaying different UI depending on a condition.",
    },
    {
      id: 10,
      question: "What is an event handler?",
      answer:
        "A function that runs when a user interacts with the UI, like clicking a button.",
    },
    {
      id: 11,
      question: "What does map() do?",
      answer:
        "It creates a new array by transforming each item in an existing array.",
    },
    {
      id: 12,
      question: "Why do React lists need keys?",
      answer:
        "Keys help React identify which items have changed, been added, or removed.",
    },
    {
      id: 13,
      question: "What is lifting state up?",
      answer:
        "Moving state to a common parent so multiple components can share it.",
    },
    {
      id: 14,
      question: "What is localStorage?",
      answer:
        "A browser feature that stores data even after the page is refreshed.",
    },
    {
      id: 15,
      question: "What is TypeScript?",
      answer: "A superset of JavaScript that adds static typing.",
    },
    {
      id: 16,
      question: "What does async/await do?",
      answer: "It makes asynchronous code easier to read and write.",
    },
    {
      id: 17,
      question: "What is an API?",
      answer:
        "An interface that allows different software applications to communicate.",
    },
    {
      id: 18,
      question: "What is Tailwind CSS?",
      answer:
        "A utility-first CSS framework for rapidly building user interfaces.",
    },
    {
      id: 19,
      question: "What is npm?",
      answer:
        "A package manager used to install and manage JavaScript libraries.",
    },
    {
      id: 20,
      question: "What is Vite?",
      answer:
        "A fast build tool and development server for modern web applications.",
    },
  ];
  const [currentFlashCard, setCurrentFlashCard] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  const totalFlashCards: number = flashcards.length;
  let progressPercentage: number = (currentFlashCard / totalFlashCards) * 100;

  if (progressPercentage > 100) {
    progressPercentage = 100;
  }

  const handleNextButton = () => {
    if (currentFlashCard == totalFlashCards) {
      return;
    }
    setCurrentFlashCard(currentFlashCard + 1);
  };

  const handlePreviousButton = () => {
    if (currentFlashCard == 1) {
      return;
    }
    setCurrentFlashCard(currentFlashCard - 1);
  };

  return (
    <>
      <div className="h-screen overflow-hidden flex items-center justify-center">
        <div className="w-xl h-3/4 flex flex-col m-2">
          <h1 className="text-xl font-bold">Flash Cards</h1>

          <div className="border-2 h-8 overflow-hidden relative rounded-2xl mb-2">
            <div
              className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-end pr-2 font-bold">
              {`${currentFlashCard} / ${totalFlashCards}`}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="bg-gray-300 mb-2 flex-1 flex items-center justify-center rounded-2xl text-xl text-center">
              {showAnswer ? (
                <p>{flashcards[currentFlashCard - 1].answer}</p>
              ) : (
                <p>{flashcards[currentFlashCard - 1].question}</p>
              )}
            </div>
            <div className="flex justify-between py-2 px-3 bg-gray-300 rounded-2xl font-bold">
              <button className="cursor-pointer" onClick={handlePreviousButton}>
                {"< Previous"}
              </button>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setShowAnswer(!showAnswer);
                }}
              >
                Show Answer
              </button>
              <button className="cursor-pointer" onClick={handleNextButton}>
                {"Next >"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
