import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body className="bg-gray-300">
      <div className="max-w-xl w-full mx-auto space-y-5 p-5 bg-white">
          <h1 className="text-center text-3xl font-bold">ChangeLog</h1>
          <p className="text-center">Here's everything that's changed recently.</p>
          <div className="relative">
            
          </div>
      </div>
    </body>
  );
}

export default App;
