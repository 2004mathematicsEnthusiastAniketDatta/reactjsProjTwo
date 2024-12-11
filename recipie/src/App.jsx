import { useState } from 'react'

import './App.css'
import Head from './Components/Head'
import Sidebar from './Components/Sidebar'
import Body from './Components/Body'

function App() {
  const [colorState, setColorState] = useState("white");

  return (
    <>
      <div className='text-5xl  w-full h-screen duration-200' style={{backgroundColor: colorState}}>
        <Head />
        <Body />
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <button 
            className={`px-6 py-2 rounded-full text-white ${colorState === "white" ? "bg-blue-500" : "bg-gray-900"} hover:bg-${colorState === "white" ? "blue-600" : "gray-800"} transition duration-200`}
            onClick={() => setColorState(colorState === "white" ? "orange" : "white")}
          >
            Switch Theme
          </button>  {/* Switch Theme Button */}
        </div>
        {/* 
          * Head
          * Body
              - Sidebar
                   -Menu Items
              -MainContainer
                   -ButtonList
                   -VideosContainer
                        -VideoCards
         
         
         
         
         */}

      </div> 
    </>
  )
}

export default App
