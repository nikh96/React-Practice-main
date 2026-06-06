import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-4 rounded-3xl">
            
            {/* Button code fixed here */}
            <button 
              onClick={() => setColor("red")} // Isse click karne par rang badlega
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor: "red"}}
            >
              Red
            </button>
            <button 
              onClick={() => setColor("green")} // Isse click karne par rang badlega
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor: "green"}}
            >
              green
            </button>
            <button 
              onClick={() => setColor("Purple")} // Isse click karne par rang badlega
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor: "Purple"}}
            >
              Purple
            </button>
            <button 
              onClick={() => setColor("lavender")} // Isse click karne par rang badlega
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor: "lavender"}}
            >
              lavender
            </button>
            <button 
              onClick={() => setColor("pink")} // Isse click karne par rang badlega
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor: "pink"}}
            >
              pink
            </button>
            <button 
              onClick={() => setColor("Yellow")} // Isse click karne par rang badlega
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor: "Yellow"}}
            >
              Yellow
            </button>
            <button 
              onClick={() => setColor("black")} // Isse click karne par rang badlega
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor: "black"}}
            >
              black
            </button>
            <button 
              onClick={() => setColor("white")} // Isse click karne par rang badlega
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor: "white"}}
            >
              white
            </button>
            <button 
              onClick={() => setColor("orange")} // Isse click karne par rang badlega
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor: "orange"}}
            >
              orange
            </button>
            <button 
              onClick={() => setColor("grey")} // Isse click karne par rang badlega
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{backgroundColor: "grey"}}
            >
              grey
            </button>

          </div>
        </div>
    </div>
  )
}

export default App