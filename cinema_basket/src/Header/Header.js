import '../projectcss/movie.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import {useCookies} from "react-cookie";
import {AddShoppingCart} from '@mui/icons-material';

function Header() {
  const REST_API_KEY = '896869f978ea76f2bf8eea3722a7fdce';
  const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [cookies, setCookie, removeCookie] = useCookies(['user']);
 
  const login = () => {
    window.location.href =KAKAO_AUTH_URL;

  }
    let sessionValue = window.sessionStorage.getItem("user");

  const logout=()=>{
      console.log("......로그아웃..")
      removeCookie(cookies.user);

      window.sessionStorage.removeItem("user")
      window.localStorage.clear()
      window.location.href = 'http://localhost:3000';
  }

    return(
        <nav  className="navbar navbar-dark bg-dark navbar-expand-lg" >
          <a className="navbar-brand " href="http://localhost:3000/">메가박스</a>
           <ul className="navbar-nav">
           <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                페이지 이동 확인탭(사용예시)
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="http://localhost:3000/">메인페이지</a>
                <Link to="/language/1">상세보기1번</Link>
                <a className="dropdown-item" href="http://localhost:3000/insert">추가</a>
              </div>
            </li>
           <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                영화
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/a">영화1</a>
                <a className="dropdown-item" href="/b">영화2</a>
                <a className="dropdown-item" href="/c">영화3</a>
              </div>
            </li>
            <li className="nav-item dropdown">
                <Link  className="nav-link dropdown-toggle"  data-toggle="dropdown" to="/bookingHome">예매</Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/booking" className="dropdown-item">빠른예매</Link>
                <Link to="/bookingHome" className="dropdown-item">예매하기</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                극장
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/a">극장1</a>
                <a className="dropdown-item" href="/b">극장2</a>
                <a className="dropdown-item" href="/c">극장3</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/store"  data-toggle="dropdown"> 스토어
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                혜택
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/a">헤택1</a>
                <a className="dropdown-item" href="/b">혜택2</a>
                <a className="dropdown-item" href="/c">혜택3</a>
              </div>
            </li>

            <li className="nav-item dropdown">
                {sessionValue?
                <button className="btn btn-success" onClick={logout}>
                    로그아웃
                </button>
                :
                <button className="btn btn-success" onClick={login}>
                    로그인
                </button>}
            </li>
           <li>
               <Link to="/basket">
                   <div className="header_optionBasket">
                       <AddShoppingCart/>
                       {/*<span className="header_optionLineTwoheader_basketCount">*/}
                       {/*     {basket?.length}*/}
                       {/* </span>*/}
                   </div>
               </Link>
           </li>

          </ul>
      
      </nav>
    )
}

export default Header;