import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import Home from './pages/Home';
import Detail from './pages/Detail'
import InsertForm from './pages/InsertForm';
import UpdateForm from './pages/UpdateForm';
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Movie from "./pages/Movie";


//내 부분

import SeatForm from "./pages/SeatForm";
import Booking from "./pages/Booking";
import BookingHome from "./pages/BookingHome";
import Basket from "./pages/Basket";
import PaymentForm from "./pages/PaymentForm";
import StoreHome from './pages/StoreHome';
import DetailStore from './pages/DetailStore';


function App() {



  return (
    <div className='App'>
      
        <Routes>
          <Route path="/" exact={true} element={<Home/>} />
          <Route path="/movie"  element={<Movie/>} />
          <Route path="/language/:id" element={<Detail/>}/>
          <Route path="/insert" element={<InsertForm/>}/>
          <Route path="/update/:id" element={<UpdateForm/>}/>
        </Routes>

        <Routes>
            <Route path="/bookingHome" element={<BookingHome/>} />
            <Route path="/booking" element={<Booking/>} />
            <Route path="/booking/seatform" element={<SeatForm/>} />
            <Route path="/basket" element={<Basket/>} />
            <Route path="/payment" element={<PaymentForm/>} />
        </Routes>

        <Routes>
        <Route path="/auth/kakao/callback" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />


        {/* 스토어 유저 페이지 */}
        <Route path="/store" element={<StoreHome/>}/>
        <Route path="/store/:id" element={<DetailStore/>}/>
        </Routes>
    </div>
  );
}

export default App;
