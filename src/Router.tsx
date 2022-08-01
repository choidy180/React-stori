import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from './routes/CheckOut';
import CheckOutSecond from './routes/CheckOut2';
import Home from "./routes/Home";
import CashWallet from './routes/CashWallet';
import PaymentDone from './routes/PaymentDone';
import Topup from './routes/topup';
import Series from './routes/Series';
import SalePolicy from './routes/SalePolicy';
import SaleEpisode from './routes/SaleEpisode';

interface IRouterProps{
}

function Router({}: IRouterProps){
  return(
    <BrowserRouter>
      <Routes>
        {/* path마지막에 /*를 적어서 명시적으로 neste route가 render될 수 있음을 표시 */}
        <Route path="/" element={<Home/>}/>
        <Route path='/topup' element={<Topup title={"TORI Cash Topup"}/>}/>
        <Route path='/checkout' element={<CheckOut title={"CheckOut"}/>}/>
        <Route path='/checkout2' element={<CheckOutSecond title={"CheckOut"}/>}/>
        <Route path='/paymentdone' element={<PaymentDone title={"PaymentDone"}/>}/>
        <Route path='/cashWallet' element={<CashWallet title={"결제완료"}/>}/>
        <Route path='/series' element={<Series title={"Series"}/>}/>
        <Route path='/salePolicy' element={<SalePolicy title={"salePolicy"}/>}/>
        <Route path='/saleEpisode' element={<SaleEpisode title={"SaleEpisode"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;