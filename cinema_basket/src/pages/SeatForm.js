import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Seat from "../components/Seat";
import "./css/selectseat.css";
import {Container} from "react-bootstrap";
import Header from "../Header/Header";

const SeatForm = () => {

    const[basket, setBasket] = useState([]);
    const[seatForPay, setSeatForPay]=useState([]);

    const navigate = useNavigate();


    //##세션에서 데이터 받아오기
    useEffect(()=>{
        setBasket(
            JSON.parse(window.sessionStorage.getItem("basket"))
        )
    },[])


    //## 세션 업데이트 => 장바구니 페이지 이동
    const basketForm=(e)=>{
        e.preventDefault();
        // window.sessionStorage.removeItem("basket")
        // window.sessionStorage.setItem("basket",JSON.stringify(basket));
        // console.log("장바구니전 세션: ", JSON.parse(window.sessionStorage.getItem("basket")));
        console.log("장바구니 전:", basket)
        fetch("http://localhost:8080/basket/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(basket), //JS Object를 JSON으로 변경해서 던진다
        })
            .then((res) => {
                console.log("성공: ", res.data)
            }).catch((err) => {
            console.log("영화 장바구니 추가 에러발생: ",err);
        })

        navigate('/basket')
    }


    //선택한 좌석 번호 추가
    const getSeatForPay = (selectedSeat)=>{
        //기존 선택된 좌석에 새것들을 붙인다.
        setSeatForPay([
            ...seatForPay,
            selectedSeat])
        console.log("전체 값: ", seatForPay)
        console.log("받아옴:", seatForPay)
        const result = seatForPay.join()
        basket.seat_num =result;

        console.log("총 내용:",  basket)
    }


    const seatA =[
        {
            id : "A1",
        },
        {
            id : "A2",
        },
        {
            id : "A3",
        },
        {
            id : "A4",
        },
        {
            id : "A5",
        },
        {
            id : "A6",
        },
        {
            id : "A7",
        },
        {
            id : "A8",
        },
        {
            id : "A9",
        },
        {
            id : "B1",
        },
        {
            id : "B2",
        },
        {
            id : "B3",
        },
        {
            id : "B4",
        },
        {
            id : "B5",
        },
        {
            id : "B6",
        },
        {
            id : "B7",
        },
        {
            id : "B8",
        },
        {
            id : "B9",
        }
    ]


    return (
        <>
        <Container className='temp'>
            <Header/>
            <div className="class_container">

                <div className="screen">스크린</div>

                <div className="seat_container">
                    <div className="seat">
                        {seatA.map((seat)=>(
                            <Seat getSeatForPay={getSeatForPay} seat={seat} key={seat.id}/>
                        ))}
                    </div>
                </div>

                <button className="btn_basket" onClick={basketForm} >장바구니로</button>
            </div>
        </Container>
        </>
    );
};

export default SeatForm;