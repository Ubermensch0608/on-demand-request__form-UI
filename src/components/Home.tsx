import React from "react";
import HomeDescription from "./HomeDescription/HomeDescription";
import styled from "styled-components";
import { useAppSelector } from "store/hooks";
import { Card } from "./UI/Card";

const Home = () => {
  const requests = useAppSelector((state) => state.requests.requests);

  return (
    <HomeWrapper>
      <HomeDescription />
      <div>필터</div>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
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
                <button>요청 내역 보기</button>
                <button>채팅하기</button>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </HomeWrapper>
  );
};

export const HomeWrapper = styled.section`
  position: absolute;
  width: 100%;
  margin: 110px 155px 60px 155px;
`;

export default Home;
