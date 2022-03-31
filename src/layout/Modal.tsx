import React, { FC, Fragment } from "react";
import ReactDOM from "react-dom";

import ColorMainLogo from "assets/img/main-logo-color.png";
import BlackCompanyIcon from "assets/img/company-icon-black.png";
import styled from "styled-components";

export const ModalOverLay = () => {
  return (
    <ModalWrapper>
      <ModalInnerContents>
        <div>
          <img src={ColorMainLogo} alt="main-logo-color" />
          <hr />
        </div>

        <div>
          <div>
            <span>
              <img src={BlackCompanyIcon} alt="company-icon" />
            </span>
            <span>파트너정밀가공</span>
          </div>
          <div>로그아웃</div>
        </div>
      </ModalInnerContents>
    </ModalWrapper>
  );
};

const SideBackDrop: FC<{ onModal: React.MouseEventHandler }> = ({
  onModal,
}) => {
  return <BackDrop onClick={onModal} />;
};

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.75);
`;

const Modal: FC<{ onModal: React.MouseEventHandler }> = ({ onModal }) => {
  const modalRoot = document.getElementById("overlay-root") as HTMLElement;
  const backDropRoot = document.getElementById("backdrop-root") as HTMLElement;

  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalOverLay />, modalRoot)}
      {ReactDOM.createPortal(<SideBackDrop onModal={onModal} />, backDropRoot)}
    </Fragment>
  );
};

export const ModalWrapper = styled.div`
  position: fixed;
  width: 70%;
  height: 100%;
  z-index: 10000;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  transition: 0.3s;

  animation: 0.3s ease-in slide-to-right;
  @keyframes slide-to-right {
    from {
      transform: translateX(-200px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;

export const ModalInnerContents = styled.div`
  margin: 16px 20px;
  font-size: 14px;

  > div:nth-child(1) {
    margin-bottom: 50px;

    > img {
      width: 92px;
      height: 12px;
      margin-bottom: 16px;
    }
    > hr {
      border: none;
      outline: 1px solid #e5e5e5;
    }
  }

  > div:nth-child(2) {
    > div {
      margin-top: 20px;
    }
    > img {
      width: 92px;
      height: 12px;
    }
    img {
      width: 15px;
      height: 15px;
      margin-right: 8px;
    }
  }
`;
export default Modal;
