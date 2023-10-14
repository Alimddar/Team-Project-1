import React from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
import MainPage from './pages/main-page';
import Login from './pages/login';
import Register from './pages/register'; 

function App() {
  const route = useRoutes([
    {
      index:true,
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    
  ])
  return route
}

export default App;