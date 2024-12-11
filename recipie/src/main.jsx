import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import WatchScreen from './Components/WatchScreen.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:"",
        element: <App/>
      },
      {
        path: "/watch",
        element: <WatchScreen />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
