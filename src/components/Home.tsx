import React from "react";
import HomeDescription from "./HomeDescription/HomeDescription";
import styled from "styled-components";
import { useAppSelector } from "store/hooks";
import { Card } from "./UI/Card";
import Button from "./UI/Button";

const Home = () => {
  const requests = useAppSelector((state) => state.requests.requests);

  return (
    <HomeWrapper>
      <HomeDescription />
      <div>필터</div>
      <RequestForms>
        {requests.map((request) => {
          return (
            <RequestForm key={request.id}>
              <RequestCard>
                <RequetInnerTop>
                  <h3>{request.title}</h3>
                  <p>{request.client}</p>
                  <p>{request.due}까지 납기</p>
                  <hr />
                </RequetInnerTop>
                <RequetInnerBottom>
                  <tbody>
                    <RequestInfo>
                      <td>도면개수</td>
                      <td>{request.count}</td>
                    </RequestInfo>
                    <RequestInfo>
                      <td>총 수량</td>
                      <td>{request.amount}</td>
                    </RequestInfo>
                    <RequestInfo>
                      <td>가공방식</td>
                      <td>{request.method}</td>
                    </RequestInfo>
                    <RequestInfo>
                      <td>재료</td>
                      <td>{request.material}</td>
                    </RequestInfo>
                  </tbody>
                </RequetInnerBottom>
                <ButtonActions>
                  <Button theme="blue">요청 내역 보기</Button>
                  <Button theme="white">채팅하기</Button>
                </ButtonActions>
              </RequestCard>
            </RequestForm>
          );
        })}
      </RequestForms>
    </HomeWrapper>
  );
};

export const HomeWrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 99;
  width: 100%;
  margin: 0 auto;
`;

export const RequestForms = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: flex-start;
  width: 100%;
  margin: 0 auto;
`;

export const RequestForm = styled.li`
  display: flex;
`;

export const ButtonActions = styled.div`
  margin-top: 32px;
`;

export const RequestCard = styled(Card)`
  display: flex;
  width: 366px;
  height: fit-content;
  flex-direction: column;
  justify-content: space-between;
`;

export const RequetInnerTop = styled.div`
  > :nth-child(1) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #323d45;
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

  > td:nth-child(1) {
    font-weight: 400;
    padding-bottom: 8px;
  }
  > td:nth-child(2) {
    font-weight: 700;
  }
`;

export default Home;
