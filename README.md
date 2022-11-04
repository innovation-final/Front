# Stock's talk ?

관심 주식 추적과 모의투자 기능이 있는 주식 웹 서비스

## [STOCK'S TALK 바로가기](https://main.stocks-talk.site/)

## 1. 프로젝트 소개 🗒

![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbyRaIO%2FbtrPzjvBbqE%2FfkPkOIuPQIaRQlhVUonjek%2Fimg.jpg)

**_모의투자를 통해 주식경험을 쌓고, 관심종목 알림을 받아보세요 !_**

**_나만의 주식경험을 커뮤니티에 공유해 주세요 !_**

**_모의투자로 목표 수익률을 달성하고 업적을 획득하세요 !_**

## 2. 제작기간 & 팀원소개 🏃‍🏃‍♀️ 💨

## **_2022-09-16 ~ 2022-10-28🔥_**

-   FE - 김승원 :  
    커뮤니티 CRUD / 좋아요 / 관심종목 / 랭킹보드/ 알람 / 유저정보 수정 / 계좌개설 / 업적
-   FE - 황준수 :  
    레이아웃 / 댓글 CRUD / 실시간 채팅 / 그래프 / 모의투자 / 주식정보 불러오기 / 게시글 페이지
-   FE - 홍준형 :  
    소셜로그인(카카오, 구글)
-   BE - 김학준
-   BE - 민지영

## 3. 주요 기능 📌

✅ 소셜 로그인  
✅ 실시간 채팅  
✅ 모의투자(시장가, 지정가)  
✅ 실시간 주식 정보 확인  
✅ 실시간 푸시알림(업적, 커뮤니티)  
✅ 다크모드

## 4. 기술 스택 🛠

**STACK**  
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/recoil-764ABC?style=for-the-badge&logo=recoil&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
<img src="https://img.shields.io/badge/apexcharts-00CBEC?style=for-the-badge&logo=&logoColor=white">  
**Deploy**  
<img src="https://img.shields.io/badge/Amplify-FF9900?style=for-the-badge&logo=AWS-Amplify&logoColor=white">

## 5. API 명세서 📃

https://www.notion.so/API-22041a391cbb41919f50574665c7899c

## 6. ERD 🗂

https://www.notion.so/ERD-fe370cf911354aea909d03b7cb45cb67

## 7. 트러블 슈팅 🎃

**주식 관련 데이터 조회**

-   사용 기술: React-Query
-   2분 단위로 갱신되는 대량의 데이터를 조회할 때의 성능 개선을 위해 사용
-   useQuery 호출 당시 옵션으로 staleTime을 지정하여 지속적으로 서버에 요청하는 것을 방지하여 캐싱 기능 원활하게 함

**다크 모드 기능 구현**

-   사용 기술: Recoil, styled-components themeprovider
-   프로젝트 중반부에 아이디어가 떠올라 각 컴포넌트들의 color 변수들을 재설정하는데에 많은 시간을 할애함
-   isDark라는 boolean 변수를 사용해야 하는데, props로 넘기면 복잡한 props drilling이 발생하기 때문에 이를 피하기 위해 상태관리 패키지 중 Recoil 사용
-   다크모드 전환 후 렌더링이 1회 안되는 오류가 있었음. Recoil과 ContextAPI를 둘 다 사용해 보았지만 같은 결과였음. 임시방편으로 새로고침을 시키는 방법을 사용하였음. (해결 진행중)

**코스피, 코스닥 지표 차트**

-   메인 페이지에 데이터 양이 많아 버벅거리는 문제
-   메인 페이지에는 주식 종목 차트도 많이 있어서 코스피, 코스닥 10년치 데이터로 그리기보다 1일치로 데이터 수를 낮춤

**게시글 작성 시 주식 종목 자동 완성 기능**

-   DB에 저장된 종목 이름대로 게시할 수 있게 도와줌, 종목 상세 페이지에서 관련 게시글 불러올 때 편리함 제공
-   복잡한 코드의 정리를 위해 Recoil을 활용해 전역관리를 하여 종목 데이터 저장

## 8. Commit Message

Feat : 새로운 기능의 추가  
Fix: 버그 수정  
Docs: 문서 수정  
Style: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)  
Refactor: 코드 리펙토링  
Test: 테스트 코트, 리펙토링 테스트 코드 추가  
Chore: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)
