import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import { router } from "./component/router/index";
import { RouterProvider, Routes } from 'react-router-dom';
import {Routes as BrowserRouter,Router,Route } from "react-router-dom";


function App() { 
  return (
  <div className="">
    <RouterProvider  router={router}/>
   
  </div>
  );
}

export default App;
