import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieBasket = (props) => {
    const navigate = useNavigate();
    const bi= props.bi

    const deleteItem=(e)=>{
        e.preventDefault();
        axios.delete("http://localhost:8080/itembasket/" + bi.id)
            .then((res)=>{
                console.log("아이템 삭제 성공", res.data)
                navigate("/basket")}
            )
            .catch(err=>console.log("아이템 삭제 실패", err))
    }
    return (
        <>

            <div className="movieItem">
                <div className="movie_poster">
                    <img style={{width: '100px', height: '150px' }}
                         src={bi.item_image}
                         alt="이미지" />
                </div>

                <div className="basket_details">
                    <div className="details">상품명 :{bi.item_name}</div>
                    <div className="details">수량 :{bi.total_amount}</div>
                    <div className="details">가격 :{bi.total_price}</div>
                </div>

                <button type="submit" className="btnDelete" onClick={deleteItem} width="50px" height="50px">X</button>

            </div>
            <div className="bottom"/>

        </>
    );
};

export default MovieBasket;