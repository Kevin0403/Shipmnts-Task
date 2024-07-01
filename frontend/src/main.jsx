import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Form} from './components'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter(
  [
    {
      path : "/",
      element : <App />,
      children : [
        {
          path : "/",
          element : <h1>Home</h1> 
        },
        {
          default : true,
          path : "Upload",
          element : <Form />
        },
        {
          path : "View",
          element : <h1>View</h1>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
