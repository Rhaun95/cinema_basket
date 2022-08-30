import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./css/basket.css"
import MovieBasket from "../components/MovieBasket";
import ItemBasket from "../components/ItemBasket";
import Header from "../Header/Header";
import {Container} from "react-bootstrap";
import './css/basket.css';

const Basket = (props) => {
    const [movieItems,setMovieItems] = useState([]);
    const [storeItems, setStoreItems] = useState([]);

    const [moviePrice, setMoviePrice] = useState(0);
    const [storePrice, setStorePrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(moviePrice+storePrice);

    const navigate = useNavigate();

    const paymentForm=()=>{
        navigate('/payment')
    }
    let mp=0;

    function storePrices(storeItems){
       mp= storePrice
        for(let i=0; i<storeItems.length; i++){
            mp +=  storeItems[i].total_price;
        }
        setStorePrice(mp)
    }

//'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220820'
    //res.boxOfficeResult.dailyBoxOfficeList

    //영화 장바구니 불러오기
    useEffect(() => {
        fetch("http://localhost:8080/basket/", {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => {
                setMovieItems(res)
            }); //비동기 함수
    }, []);

    //매점 장바구니
    useEffect(()=>{
        fetch("http://localhost:8080/itembasket/", {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => {
                setStoreItems(res);
                storePrices(storeItems);
            }); //비동기 함수
    }, []);

    return (
        <>
            <Container className='temp'>
                <Header/>
                <div >
                    <h3>영화 장바구니</h3>
                    <div className="basket_container">
                        {movieItems.map((mb) => (
                            <MovieBasket mb={mb}/>
                        ))}
                    </div>

                    <div className="price">
                        <h3>가격 :  {moviePrice}</h3>
                    </div>
                </div>


                <div >
                    <h3>매점 장바구니</h3>
                    <div className="basket_container">
                        {storeItems.map((bi) => (
                            <ItemBasket bi={bi}/>
                        ))}
                    </div>

                    <div className="price">
                        <h3>가격 : {storePrice}</h3>
                    </div>
                </div>

                <div className="bottom">

                    <button className="btn_payment" onClick={paymentForm}>결제하기</button>
                    <div>총액 : {totalPrice}</div>
                </div>
            </Container>
        </>
    );
};

export default Basket;