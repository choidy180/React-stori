import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Container
import ContainerBox from './components/cash/container';

// HOME
import Home from './routes/home';

// CASH
import Topup from './routes/cash/topup';
import Checkout from './routes/cash/checkout';
import PaymentDone from './routes/cash/paymentdone';
import CashWallet from './routes/cash/cashwallet';

// ADMIN
import AdminBox from './components/admin/box';
import AdminExamin from './routes/admin/examin';
import AdminSettlementList from './routes/admin/settlementlist';


// SALE
import SaleBox from './components/sale/box';
import SaleEpisode from './routes/sale/Episode';
import SalePolicy from './routes/sale/Policy';

// OTHER
import Series from './routes/series';


import CashWalletTest from './routes/cash/cashwallet2';

function Router({}){
  return(
    <BrowserRouter>
      <Routes>
        {/* path마지막에 /*를 적어서 명시적으로 neste route가 render될 수 있음을 표시 */}
        <Route path="/" element={<Home title={"STORICHAIN"}/>}/>

        {/* CASH */}
        <Route path='/cash' element={<ContainerBox/>}>
          <Route path='topup' element={<Topup title={'토리캐시 충전'}/>}/>
          <Route path='checkout' element={<Checkout title={'결제 확인'}/>}/>
          <Route path='paymentdone' element={<PaymentDone title={'결제완료'}/>}/>
          <Route path='cashwallet' element={<CashWallet title={"나의 지갑"}/>}/>
          <Route path='cashWallet2' element={<CashWalletTest title={"내 지갑"}/>}/>
        </Route>

        {/* SALE */}
        <Route path='/sale' element={<SaleBox/>}>
          <Route path='episode' element={<SaleEpisode/>}/>
          <Route path='policy' element={<SalePolicy/>}/>
        </Route>

        {/* ADMIN */}
        <Route path='/admin' element={<AdminBox/>}>
          <Route path='examin' element={<AdminExamin title={"판매 심사"}/>}/>
          <Route path='settlementlist' element={<AdminSettlementList title={"판매 정산"}/>}/>
        </Route>
        
        <Route path='series' element={<Series title={"시리즈"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;