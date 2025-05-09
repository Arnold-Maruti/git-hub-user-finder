import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProfileDisplay from './components/ProfileDisplay';



  
import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",                     
    element: <Navigate to="/app" replace />
  },
  {
    path: "/app",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/user/:username",
    element: <ProfileDisplay />
  },
  {
    path: "*",                     
    element: <ErrorPage />
  }
  
])
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import SearchBar from './components/SearchBar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
