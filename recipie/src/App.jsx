import { useState } from 'react'

import './App.css'
import Head from './Components/Head'
import Sidebar from './Components/Sidebar'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-5xl'>
        <Head />
        <Body />
        
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
