import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

interface IRouterProps{

}

function Router({}: IRouterProps){
  return(
    <BrowserRouter>
      <Routes>
        {/* path마지막에 /*를 적어서 명시적으로 neste route가 render될 수 있음을 표시 */}
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;