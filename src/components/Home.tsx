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
        {requests.map((request) => (
          <RequestForm key={request.id}>
            <Card>
              <div>
                <h3>{request.title}</h3>
                <p>{request.client}</p>
                <p>{request.due}</p>
                <hr />
              </div>
              <div>
                <div>
                  <span>도면개수</span>
                  <span>{request.count}</span>
                </div>
                <div>
                  <span>총 수량</span>
                  <span>{request.amount}</span>
                </div>
                <div>
                  <span>가공방식</span>
                  <span>{request.method}</span>
                </div>
                <div>
                  <span>재료</span>
                  <span>{request.material}</span>
                </div>
              </div>
              <div>
                <Button theme="blue">요청 내역 보기</Button>
                <Button theme="white">채팅하기</Button>
              </div>
            </Card>
          </RequestForm>
        ))}
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
  margin: 0 auto;
`;

export const RequestForm = styled.li`
  width: 366px;
  height: 356px;
  margin: 16px 0;
  padding: 24px 16px;
`;

export default Home;
