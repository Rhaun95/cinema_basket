# cinema_basket
React
### 👣시도 1

**진행 상황**

- 메인 홈 부터 장바구니까지 대략적인 틀 구현 완료
    - BookingHome → Booking → SeatForm → Basket
- Booking.js
    - 영화/상영관/날짜/시간대 선택 ⇒ 좌석 페이지로 이동
- SeatForm.js
    - 좌석 지정 ⇒ basket으로 이동
- Basket.js
    - 장바구니 목록 확인

### **BookingHome.js**

![BookingHome.js](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23c268f0-7390-4d3e-b88d-dd218edbbd2e/Untitled.png)

BookingHome.js

### **Booking.js**

![Booking.js](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4828fea6-9491-409f-b518-bb26d1351664/Untitled.png)

Booking.js

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/88772a71-acb0-4fb5-a59b-d13ce0b3aa80/Untitled.png)

- 영화/상영관/날짜/시간대 선택후 좌석을 고르러 이동한다
- 콘솔에는 전 페이지에서 선택한 값을 담은 객체가 출력되있다.

### **SeatForm.js**

![SeatForm.js](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2556b6d3-1b82-4fe6-a81f-f6c36a46e45e/Untitled.png)

SeatForm.js

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1b41f74a-c688-4ee8-b4fc-c6d75a12c3fe/Untitled.png)

- 좌석선택후 화면에는 없지만 장바구니 이동 버튼이 있다.
- 오른쪽에는 좌석이 추가된 객체를 보여준다. 여기서 보듯이 첫번째 선택이 무시되어 좌석이 두개만 찍힌게 보인다. 추후에 개선할 것이다.

### **Basket.js**

![Basket.js](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5f52057-667f-4795-9808-47b4ee14a003/Untitled.png)

Basket.js

- 영화/매점 아이템들을 위 아래 따로 컴포넌트를 생성해 구분해주었다.

### 📖개선사항

- 첫번째 실행 무시 현상(영화/아이템 둘다 두번째 선택부터 데이터가 담김)
- 컴포넌트 사이에서는 DB가 아닌 단순히 데이터 이동으로 전환(redux)
- React가 아직 미숙해 페이지/컴포넌트간 데이터 이동이 원활하지 않음
    
     → fetch/axios의 사용으로 프로젝트 DB나 Session에 저장해 꺼내서 매번 불러옴 
    
     → 필수적이지 않은 호출들로 효율적이지 않음
    
     → 리액트의 장점이 가려짐
    
- 가격 가져오기
