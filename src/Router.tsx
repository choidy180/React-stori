import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Container
import ContainerBox from './routes/container';

// HOME
import Home from './routes/Home';

// CASH
import Checkout from './routes/cash/checkout';

// ADMIN
import AdminBox from './components/admin/box';

import CashWallet from './routes/CashWallet';
import PaymentDone from './routes/PaymentDone';
import Topup from './routes/cash/topup';
import Series from './routes/Series';
import SaleEpisode from './routes/sale/Episode';
import SalesExamin from './routes/admin/SalesExamin';
import SalesSettlementList from './routes/admin/SalesSettlementList';
import SalePolicy from './routes/sale/Policy';
import SaleBox from './components/sale/box';

function Router({}){
  return(
    <BrowserRouter>
      <Routes>
        {/* path마지막에 /*를 적어서 명시적으로 neste route가 render될 수 있음을 표시 */}
        <Route path="/" element={<Home title={"STORICHAIN"}/>}/>

        {/* CASH */}
        <Route path='/cash' element={<ContainerBox/>}>
          <Route path='topup' element={<Topup title={'TORI CASH TOPUP'}/>}/>
          <Route path='checkout' element={<Checkout title={'Checkout'}/>}/>
        </Route>
        <Route path='/paymentdone' element={<PaymentDone title={"PAYMENTDONE"}/>}/>
        <Route path='/cashWallet' element={<CashWallet title={"결제완료"}/>}/>
        <Route path='/series' element={<Series title={"SERIES"}/>}/>

        {/* SALE */}
        <Route path='/sale' element={<SaleBox/>}>
          <Route path='episode' element={<SaleEpisode/>}/>
          <Route path='policy' element={<SalePolicy/>}/>
        </Route>

        {/* ADMIN */}
        <Route path='/admin' element={<AdminBox/>}>
          <Route path='examin' element={<SalesExamin title={"SALESEXAMIN"}/>}/>
          <Route path='settlementlist' element={<SalesSettlementList title={"SALESEXAMIN"}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;