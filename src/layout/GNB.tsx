import React, { Fragment, useState } from "react";

import MenuIcon from "assets/img/menu_icon_24px.png";
import MainLogo from "assets/img/main-logo.png";
import CompanyIcon from "assets/img/company-icon.png";

import styled from "styled-components";
import Modal from "./Modal";

const GNB = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDashBoardHandler = (event: React.MouseEvent) => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      {isModalOpen && <Modal onModal={closeModalHandler} />}
      <NavWrapper>
        <MainNav>
          <div>
            <MenuBtn onClick={openDashBoardHandler}>
              <img src={MenuIcon} alt="menu-icon" width={24} height={24} />
            </MenuBtn>
          </div>
          <div>
            <span>
              <CAPALogo src={MainLogo} alt="main-logo" />
            </span>
          </div>
          <NavRightContents>
            <div>
              <img
                src={CompanyIcon}
                alt="company-icon"
                width={16}
                height={15}
              />
            </div>
            <div>
              <span>A 가공 업체</span>
              <span />
              <span>로그아웃</span>
            </div>
          </NavRightContents>
        </MainNav>
      </NavWrapper>
    </Fragment>
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

  @media (max-width: 768px) {
    height: 44px;
  }
`;

export const MainNav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: auto 40px;

  @media (min-width: 1439px) {
    margin: auto;
    max-width: 1330px;
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: left;
    margin: auto 20px;
  }

  > div:nth-child(1) {
    display: none;
    margin-right: 10px;

    @media (max-width: 767px) {
      display: inline-block;
    }
  }
`;

export const CAPALogo = styled.img`
  width: 153px;
  height: 20px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 92px;
    height: 12px;
  }
`;

export const NavRightContents = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 767px) {
    display: none;
  }

  > div:nth-child(1) {
    margin-right: 8px;
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
  }

  > div > span {
    cursor: pointer;

    :nth-child(2) {
      display: inline-block;
      content: "";
      cursor: none;
      background-color: #fff;
      margin: 0 32px;
      width: 1.5px;
      height: 16px;
    }
  }
`;

export const MenuBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: inherit;

  width: 24px;
  height: 24px;
  padding: 0;
`;

export default GNB;
