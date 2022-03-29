# 사용자를 위한 요청서 관리 서비스

## 서비스 링크: <a href='https://request-form-rewind-2.herokuapp.com/'>요청서 필터링 웹 링크</a>

**preview**

<img />

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/Ubermensch0608/request_form_rewind.git

# install modules
$ cd requests-for-partner
$ yarn install

# build
$ yarn build

# start
$ yarn start:dev

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3001/
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
    └── src

## ✅ 구현 사항

## 배포 에러 해결 방법

1.  heroku config:set NPM_CONFIG_PRODUCTION=false
    설정을 해줘야함
2.  "cross-env": "^7.0.3",
    cross-env를 설치
