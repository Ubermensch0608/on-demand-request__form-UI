import React from "react";

import MainLogo from "assets/img/main-logo.png";
import CompanyIcon from "assets/img/company-icon.png";

import styled from "styled-components";

const GNB = () => {
  return (
    <NavWrapper>
      <MainNav>
        <div>
          <span>
            <CAPALogo src={MainLogo} alt="main-logo" />
          </span>
        </div>
        <NavRightContents>
          <div>
            <img src={CompanyIcon} alt="company-icon" width={16} height={15} />
          </div>
          <div>
            <span>A 가공 업체</span>
            <span> </span>
            <span>로그아웃</span>
          </div>
        </NavRightContents>
      </MainNav>
    </NavWrapper>
  );
};

export const NavWrapper = styled.header`
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #1565c0;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  @media (width < 768px) {
    height: 44px;
  }
`;

export const MainNav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin: auto 40px;

  @media (width > 1440px) {
    margin: auto;
  }
`;

export const CAPALogo = styled.img`
  width: 153px;
  height: 20px;
  cursor: pointer;
`;

export const NavRightContents = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 14px;

  > div:nth-child(1) {
    margin-right: 8px;
  }

  > div > span {
    cursor: pointer;

    :nth-child(2) {
      content: " ";
      cursor: none;
      background-color: #fff;
      width: 1px;
      height: 16px;
      margin: 0 32px;
    }
  }
`;
export default GNB;
