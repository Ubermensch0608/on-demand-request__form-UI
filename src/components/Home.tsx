import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeDesc>
        <h3>들어온 요청</h3>
        <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      </HomeDesc>
      <div>필터</div>
      <div>요청서 나열</div>
    </HomeWrapper>
  );
};

export const HomeWrapper = styled.section`
  position: absolute;
  width: 100%;
  margin: 110px 155px 60px 155px;
`;

export const HomeDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;

  > h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
  }
  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;
export default Home;
