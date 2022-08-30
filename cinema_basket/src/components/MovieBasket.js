import React from 'react';
import axios from "axios";

const MovieBasket = (props) => {

    const mb= props.mb

    function deleteItem(e){
        e.preventDefault();
        axios.delete("http://localhost:8080/basket/"+mb.id)
            .then((res)=>console.log("영화 장바구니 삭제 성공", res))
            .catch(err=>console.log("영화 장바구니 삭제 실패", err))
    }
    return (
        <>

            <div className="movieItem">
                <div className="movie_poster">
                    <img style={{width: '100px', height: '150px' }}
                         src={mb.postUrl}
                         alt="이미지" />
                </div>

                <div className="basket_details">
                    <div className="details">영화 :{mb.title}</div>
                    <div className="details">상영날짜 :{mb.reserveDate}</div>
                    <div className="details">상영시간 :{mb.movie_time}</div>
                    <div className="details">상영관 :{mb.cinema_name}</div>
                    <div className="details">좌석 :{mb.seat_num}</div>
                </div>
                <button className="btnDelete" onClick={deleteItem} width="50px" height="50px">X</button>
            </div>
            <div className="bottom"/>

        </>
    );
};

export default MovieBasket;