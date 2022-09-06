# 집사마켓 : 게시판 및 중고마켓 사이트

React,Next.js 공부 후 개인적으로 만든 프로젝트입니다.

- 수행 기간 : 2022.05.09 ~ 2022.07.01
- 이후 스타일 수정 및 리팩토링 진행 중입니다.(2022.08 기준)

## 배포 URL

- 배포 링크 : [https://devlynn.shop/](https://devlynn.shop/)

## 실행 방법

배포 서버가 원활하지 못할 경우 다음과 같이 실행해주세요.

```
git clone https://github.com/hlezg08/freeboard_frontend.git
```

```
npm install
npm start
# or
yarn install
yarn dev
```

테스트 계정

- ID: catlover@gmail.com
- PW: cat1234@

## 기술 스택

- Framework : Next.js, React
- Language : TypeScript, JavaScript
- API Req & Res : GraphQL, Apollo-Client
- Deployment : AWS S3

## 주요 기능

- 로그인
- 게시판 등록, 조회, 수정, 삭제
- 댓글 및 대댓글
- 게시판 페이지네이션 직접 구현
- 게시판 좋아요
- 마켓 찜하기
- 이미지 업로드
- 아임포트를 활용한 결제 구현
- 카카오맵 API를 활용한 지도 구현
- 권한 분기 및 마이페이지
