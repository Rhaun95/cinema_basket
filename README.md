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
<img width="200" src="https://user-images.githubusercontent.com/105895293/187582734-7c80bc51-9127-4402-8f61-01e2a59d3e0c.png">


### **Booking.js**
<div>
    <img width="350" src="https://user-images.githubusercontent.com/105895293/187583383-a80abee5-ab93-40d1-ab38-9d6c7a59e9f5.png">
    <img width="350" src="https://user-images.githubusercontent.com/105895293/187583662-7cba0296-cae2-41c9-aab2-8f33b19ffc54.png">
</div>
- 영화/상영관/날짜/시간대 선택후 좌석을 고르러 이동한다
- 콘솔에는 전 페이지에서 선택한 값을 담은 객체가 출력되있다.

### **SeatForm.js**
<div>
    <img width="350" src="https://user-images.githubusercontent.com/105895293/187583397-465c2c6c-96b1-4eef-979b-63d947703090.png">
    <img width="350" src="https://user-images.githubusercontent.com/105895293/187583667-4aa7d984-cf5e-4165-9233-c68fafa95eee.png">
</div>
- 좌석선택후 화면에는 없지만 장바구니 이동 버튼이 있다.
- 오른쪽에는 좌석이 추가된 객체를 보여준다. 여기서 보듯이 첫번째 선택이 무시되어 좌석이 두개만 찍힌게 보인다. 추후에 개선할 것이다.

### **Basket.js**

<img width="400" src="https://user-images.githubusercontent.com/105895293/187583406-78c01e9d-9572-4048-a04e-1ef6388825ee.png">

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
