import React,{useState} from 'react';
import './css/seat.css'

const Seat = (props) => {
    const seat = props.seat;
    const [isSelect, setIsSelect] = useState(false);

    const selectSeat =()=>{
        setIsSelect(isSelect?false:true);
        if(!isSelect){
            props.getSeatForPay(seat.id)
        }
    }

    return (
        <>
            <button className="seat"  style={{backgroundColor: isSelect?"lightblue":"gray"}}
                    onClick={selectSeat}>  {seat.id}</button> {(seat.id).charAt(1)==="9"?<br/>: ""}
        </>
    );
};

export default Seat;