import React,{useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./css/booking.css";
import axios from "axios";
import {Container} from "react-bootstrap";
import Header from "../Header/Header";

const Booking = () => {
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(new Date());

    const [movieItems,setMovieItem] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);


    const [cinemaList, setCinemaList] = useState([]);
    const [selectedCinema, setSelectedCinema] = useState("");

    const [timeList, setTimeList] = useState(["9:30","11:30","13:30","15:30","17:30","19:30","21:30","23:30"]);
    const [selectedTime, setSelectedTime] = useState("");


    //임시 장바구니(user_id 받아와야됨)
    const [totalBooking, setTotalBooking] = useState({
        user_id:"kim",
        title : selectedMovie,
        postUrl: "",
        movie_time: "",
        reserveDate: "",
        cinema_name: "",
        cinema_id: 0,
        seat_num: "",
        total_amount: 0,
        total_price: 0,
        mbti: "",
    })



    //캘린더
    const Calender = () => {

        return (

            <DatePicker
                selected={startDate}
                dateFormat="yyyy-MM-dd (eee)"
                closeOnScroll={true}
                locale={ko}
                onChange={changeDate}
                minDate={new Date()}  />
        );
    };

    // res.data.Data[0].Result
    // const movie = axios.get("http://localhost:8080/")
    // http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220820
    //임시 영화정보 가져오기http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2(또는 search_json2).jsp?collection=kmdb_new2
    // useEffect(() => {
    //
    //     fetch('http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&ServiceKey=0V24QX6WM9C3K14M26U5')
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setMovieItem(res);
    //             console.log(movieItems)
    //         }); //비동기 함수
    // }, []);'

    useEffect(() => {
        axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220820")
            .then((res)=>{
                console.log(res)
                setMovieItem(res.data.boxOfficeResult.dailyBoxOfficeList)}
            )
        console.log(movieItems)
    },[]);


    //영화관DB 받아오기
    useEffect(()=>{
        axios.get("http://localhost:8080/booking/cinema")
            .then((res) => {
                setCinemaList(res.data);})
    },[]);


    //영화 선택
    const selectMovie= (e)=>{
        e.preventDefault();
        setTotalBooking({
            ...totalBooking,
            title:e.target.value,
            // postUrl: e.src.postUrl,
        })
        console.log("영화 선택", totalBooking);
    }

    //영화관 선택
    const selectCinema=(e)=>{
        e.preventDefault();
        setTotalBooking({
            ...totalBooking,
            cinema_name: e.target.value,
        })
        console.log("영화관 지정", totalBooking);
    }

    //날짜 선택
    const changeDate=(selectDate)=>{
        setStartDate(selectDate) ;
        setTotalBooking({
            ...totalBooking,
            reserveDate: selectDate,
        })
        console.log("날짜 지정", totalBooking);
    }

    //시간 선택
    const selectTime = (e)=>{
        setTotalBooking({
            ...totalBooking,
            movie_time: e.target.value,
        })
        console.log("시간 지정", totalBooking);
    }

    //체크
    function getTotal(){
        console.log(totalBooking);
    }

    //##세션에 현재 데이터 저장 =>  좌석 고르러 가기
    const selectSeat = ()=>{
        window.sessionStorage.setItem("basket", JSON.stringify(totalBooking));
        navigate("/booking/seatform");
        alert("좌석 선택 페이지로 이동합니다...")
    }


    return (
        <>
            <Container className='temp'>
                <Header/>

                <div className="class_container">

                <h3>예약 페이지 입니다.</h3>
                <input type="submit" value="영화1"/>


                <div className="booking_container">

                    <div className="content_list">

                        <div className="movie_item_title">영화</div>
                        <div className="movie_item_list">
                            {movieItems.map((mItem) => (
                                // <MovieItem mItem={mItem} key={mItem.movieCd}/>
                                <div>
                                    <img src={mItem.posturl} width="60px" height="100px"/>
                                    <Button className="movie_item" variant="primary" onClick={selectMovie} value={mItem.movieNm}>{mItem.movieNm}</Button>
                                </div>
                            ))}

                        </div>
                    </div>


                    <div className="content_list">
                        <div className="movie_item_title">영화관</div>
                        {cinemaList.map((cinema) => (
                            // <MovieItem mItem={mItem} key={mItem.movieCd}/>
                            <div>
                                <Button className="cinema_item" variant="primary" onClick={selectCinema} value={cinema.cinema_name}>{cinema.cinema_name}</Button>
                            </div>
                        ))}
                    </div>

                    <div className="calender">
                        <Calender />
                    </div>

                    <div className="time_list">
                        {timeList.map((time)=>(
                            <div>
                                <Button  className="time_btn" variant="outline-primary" onClick={selectTime} value={time}>{time}</Button>
                            </div>
                        ))}


                    </div>
                </div>

                <button onClick={getTotal}>현제 정보조회</button>
                <button onClick={selectSeat}>좌석선택</button>
            </div>


            </Container>

        </>
    );

};

export default Booking;