import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Viewblogs from './components/Viewblogs.jsx'
import Createblogs from './components/Createblogs.jsx'
import App from './routes/App.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {path: "/", element: <Createblogs />},
    {path: "/viewBlogs", element: <Viewblogs />}
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
