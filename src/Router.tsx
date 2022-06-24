import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Topup from './routes/topup';

interface IRouterProps{

}

function Router({}: IRouterProps){
  return(
    <BrowserRouter>
      <Routes>
        {/* path마지막에 /*를 적어서 명시적으로 neste route가 render될 수 있음을 표시 */}
        <Route path="/" element={<Home/>}/>
        <Route path='/topup' element={<Topup title={"TORI Cash Topup"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;