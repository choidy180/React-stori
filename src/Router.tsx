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
import SalesExamin from './routes/admin/SalesExamin';
import SalesSettlementList from './routes/admin/SalesSettlementList';

interface IRouterProps{
}

function Router({}: IRouterProps){
  return(
    <BrowserRouter>
      <Routes>
        {/* path마지막에 /*를 적어서 명시적으로 neste route가 render될 수 있음을 표시 */}
        <Route path="/" element={<Home/>}/>
        <Route path='/topup' element={<Topup title={"TORI CASH TOPUP"}/>}/>
        <Route path='/checkout' element={<CheckOut title={"CHECKOUT"}/>}/>
        <Route path='/checkout2' element={<CheckOutSecond title={"CHECKOUT"}/>}/>
        <Route path='/paymentdone' element={<PaymentDone title={"PAYMENTDONE"}/>}/>
        <Route path='/cashWallet' element={<CashWallet title={"결제완료"}/>}/>
        <Route path='/series' element={<Series title={"SERIES"}/>}/>
        <Route path='/salePolicy' element={<SalePolicy title={"SALEPOLICY"}/>}/>
        <Route path='/saleEpisode' element={<SaleEpisode title={"SALEEPISODE"}/>}/>
        <Route path='/admin/sales_examin' element={<SalesExamin title={"SALESEXAMIN"}/>}/>
        <Route path='/admin/sales_settlement_list' element={<SalesSettlementList title={"SALESEXAMIN"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;