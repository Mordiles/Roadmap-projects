

function App() {

  return (
    <body className="bg-gray-300">
      <div className="max-w-xl w-full mx-auto space-y-5 p-3 bg-white rounded-lg my-5">
        <h1 className="text-xl font-bold text-center">ChangeLog</h1>
        <p className="text-center">
          Here's everything that's changed recently.
        </p>

        <div className="relative py-5 space-y-5">
          {/* Center Line */}
          <div className="absolute w-0.5 bg-black top-0 bottom-0 left-1/2 -translate-x-1/2"></div>

          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
            <div className="text-right text-gray-400">September 3, 2025</div>
            {/* Circle */}
            <div className="flex justify-center">
              <span className="w-3 h-3 rounded-full bg-black mt-2"></span>
            </div>
            <div className="text-left shadow-md pl-1">
              Announcing Projects on Frontend Roadmap
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
            <div className="text-right text-gray-400">August 28, 2025</div>
            {/* Circle */}
            <div className="flex justify-center">
              <span className="w-3 h-3 rounded-full bg-black mt-2"></span>
            </div>
            <div className="text-left shadow-md pl-1">
              Build your learning habits with learning streaks
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
            <div className="text-right text-gray-400">August 25, 2025</div>
            {/* Circle */}
            <div className="flex justify-center">
              <span className="w-3 h-3 rounded-full bg-black mt-2"></span>
            </div>
            <div className="text-left shadow-md pl-1">
              Git and GitHub Roadmap
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
            <div className="text-right text-gray-400">August 22, 2025</div>
            {/* Circle */}
            <div className="flex justify-center">
              <span className="w-3 h-3 rounded-full bg-black mt-2"></span>
            </div>
            <div className="text-left shadow-md pl-1">
              Submit your project solution and get feedback
            </div>
          </div>
        </div>
        <button className="bg-black text-white px-2 py-2 rounded-md mx-auto flex">
          Visit Complete Changelog
        </button>
      </div>
    </body>
  );
}

export default App;
