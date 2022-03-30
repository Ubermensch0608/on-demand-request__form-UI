import { Card } from "components/UI/Card";
import styled from "styled-components";

export const RequestsForm = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: flex-start;
  width: 1250px;
  margin: 0 auto;

  @media (max-width: 1300px) {
    width: 835px;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 416px;
  }
`;

export const RequestForm = styled.li`
  display: flex;
  position: relative;
`;

export const ButtonActions = styled.div`
  margin-top: 32px;

  > button:nth-child(1) {
    margin-right: 10px;
  }
`;

export const RequestCard = styled(Card)`
  display: flex;
  width: 366px;
  height: 356px;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 320px;
    height: 344px;
  }
`;

export const RequetInnerTop = styled.div`
  > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    line-height: 24px;

    h3 {
      font-weight: 700;
      font-size: 16px;
      color: #323d45;
    }
  }
  > :nth-child(2) {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #323d45;
    margin-bottom: 24px;
  }
  > :nth-child(3) {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #939fa5;
    margin-bottom: 16px;
  }
  > :nth-child(4) {
    border: none;
    outline: 1px solid #e5e5e5;
  }
`;

export const RequetInnerBottom = styled.table`
  margin: 32px 0 8px 0;
`;

export const RequestInfo = styled.tr`
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
  width: 100%;

  > td:nth-child(1) {
    font-weight: 400;
    padding-bottom: 8px;
    width: 100px !important;
  }
  > td:nth-child(2) {
    font-weight: 700;
  }
`;

export const OnCounsle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 34px;
  height: 20px;
  border: 1px solid #ffa000;
  border-radius: 15px;
  padding: 2px 8px;
  color: #ffa000;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`;

export const NoRequestBox = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border: 1px solid #c2c2c2;
  color: #939fa5;
  font-size: 14px;
  font-weight: 400;
`;
