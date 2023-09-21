# React Blog

- React, Firebase를 이용한 리액트 블로그 프로젝트 입니다.
- URL: [https://fastcampus-react-blog.web.app/](https://fastcampus-react-blog.web.app/)
- [Pull Request](https://github.com/jen-frontend/fastcampus-react-blog/pulls?q=is%3Apr+is%3Aclosed) 탭에서 각 기능별 코드를 확인하실 수 있습니다.

<br />

# 프로젝트 설명

## 주요 기능

- CRUD 기능 구현
- 사용자 인증 및 권한 관리
- 라우팅과 페이지 구성

## 앱 구조

- (create-react-app) SPA

## 상태관리

- Context API
- 권한관리
- 테마관리(다크모드 기능)

## 애니메이션 & 스타일링

- CSS 사용 (BEM 구조)
- 캐러셀 transition

## 배포

- Firebase

## 컴포넌트

- 헤더, 푸터, 리스트, 폼, 캐러셀

## API

- firebase의 firestore를 이용한 실시간 데이터 생성
- firebase auth를 이용한 사용자 인증 개념

## 사용 스택

- React
- Firebase(로그인, 보안, 통신)
- CSS
- Vercel

## 기타 학습 개념

- 폴더 구조
- CRA 이용 프로젝트 세팅
- React hooks(useEffect, useState, useContext, useCallback)
- React-router-dom 라우터

<br />

# 구현 기능

## 공통 페이지

1.  로그인 페이지
- Firebase Auth 사용자 인증 기본 로그인

2. 메인페이지
- 최신 글 목록, 특징 콘텐츠 보여주기

3. 글 목록 페이지
- 블로그에 작성된 모든 글의 목록 보여주기
- 해당 글 선택시 상세페이지 이동

4. 글 상세 페이지
- 글 제목, 내용, 작성자, 작성일 등 표시

5. 글 수정 페이지(CRUD)

6. 카테고리 메뉴

7. 사용자 프로필 페이지(Velog,Medium st)

## 그 외 기능

1. 다크모드
2. 내가 쓴 글
3. 댓글 CRUD
