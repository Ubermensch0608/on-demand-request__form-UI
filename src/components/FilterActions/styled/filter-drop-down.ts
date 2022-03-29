import styled from "styled-components";

export const FilterWrapper = styled.span`
  display: flex;

  > span > * {
    margin-bottom: 4px;
  }

  > span:nth-child(1) {
    margin-right: 8px;
  }
`;

export const ButtonInner = styled.div`
  display: flex;
  align-items: stretch;

  > span:nth-child(1) {
    margin-right: 12px;
  }
`;

export const DropDownWrapper = styled.ul`
  position: absolute;
  z-index: 99;
  background-color: #fff;
  border: 1px solid #939fa5;
  border-radius: 4px;
  padding: 17px 12px;
  font-size: 14px;
  line-height: 20px;
  min-width: 90px;
`;

export const FilterResetBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > button > span {
    padding-left: 12px;
  }
`;
