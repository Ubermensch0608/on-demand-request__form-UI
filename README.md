# 사용자를 위한 요청서 관리 서비스

## 서비스 링크: <a href='https://request-form-rewind-2.herokuapp.com/'>요청서 필터링 웹 링크</a>

**preview**
![ateam-ventures-main](https://user-images.githubusercontent.com/93258739/160883143-a4ddb310-0a91-4e74-92de-ee59f506b76c.png)

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/Ubermensch0608/request_form_rewind.git

# install modules
$ cd request_form_rewind
$ yarn install

# build
$ yarn build

# start
$ yarn start:dev

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
⠀  Resources
⠀
```

## 🔗 의존성

```
 "dependencies": {
    "@reduxjs/toolkit": "^1.5.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "@types/jest": "^24.0.0",
    "@types/node": "^12.0.0",
    "@types/react": "^16.9.0",
    "@types/react-dom": "^16.9.0",
    "@types/react-redux": "^7.1.7",
    "@types/styled-components": "^5.1.24",
    "axios": "^0.26.1",
    "cross-env": "^7.0.3",
    "json-server": "^0.17.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.0",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.5",
    "styled-reset": "^4.3.4",
    "ts-node": "^10.7.0",
    "tsconfig-paths": "^3.14.1",
    "typescript": "~4.1.5"
  }
```

## 📂 파일 구조

    ├── public
    ├── server
    └── src ┓
                  ├ assets/
                  ├ common/
                  ├ components/
                  ├ hooks/
                  ├ layout/
                  └ store/

## ✅ 구현 사항

- [x] 헤더

  - [x] 반응형 스타일 구현

- [x] 견적 요청 카드

  - [x] 가공방식과 재료

    → **카테고리가 2가지 이상일 경우 ,로 나누어지도록 구현**

  - [x] 카드 전체 영역에 마우스 hover시 보더 스타일 변경(파란색 보더)

  - [x] 빈 화면일 때 '조건에 맞는 견적 요청이 없습니다.' 문구 출력

- [x] 필터링

  - [x] 최초 모든 요청서 표출
  - [x] 가공방식 옵션이 선택되면 해당 옵션을 가진 요청서 모두 노출
  - [x] 재료 필터 선택되면 해당 재료 조건 포함된 카드 모두 노출
  - [x] 가공 방식과 재료 필터가 둘 다 선택되면 교집합 노출
  - [x] 필터링 리셋 누르면 전체 필터 선택 해제
  - [x] **관련 필터링 영역 외 클릭 이벤트 시 드롭다운 숨김**

- [x] 토글

  - [x] 상담 중인 요청만 보기 토글 활성화하면 상담 중 뱃지가 달린 카드만 노출

- [x] 모바일 사이즈 - 사이드 메뉴

  - [x] 햄버거 메뉴 아이콘 표출
  - [x] 메뉴 화면이 왼쪽에서 들어옴
  - [x] 백그라운드 #000000 50%
  - [x] 백그라운드 영역 탭하면 메뉴 close
  - [x] portal을 이용하여 HTML 구조상 semantic 향상

- [x] json-server 사용 API 생성
  - [x] API를 이용한 데이터 비동기 처리

## 😎 해결 이슈

### **json-server 배포 이슈**

> json-server를 이용하여 생성된 API를 받아오는 것이 배포 했을 때 적용되지 않는 오류 해결

1. heroku CLI 사용 권장
   - 깃헙 연동 배포 시 설정에 제약이 있음
2. cross-env 설치
   - 추가 라이브러리 설치 필요
   - `npm install cross-env || yarn add cross-env`
3. heroku config 설정
   - heroku config:set NPM_CONFIG_PRODUCTION=false
     설정

**참고 자료**:
<a href='https://redux-advanced.vlpt.us/3/09.html'>heroku에 배포하기 with json-server </a>

### **관련 필터링 영역 외 클릭 이벤트 시 드롭다운 숨김**

→ 영역 외 클릭 이벤트시 드롭다운이 남아있는 버그

→ useEffect를 통한 전역 클릭 이벤트 생성, but 드롭다운 영역 클릭시 영역 외로 인식하는 버그

→ event.target.id 값을 받아와 조건에 맞지 않으면 전역으로 상태 변경하여 해결
