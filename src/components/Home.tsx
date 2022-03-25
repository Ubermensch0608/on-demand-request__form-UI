import React from "react";
import HomeDescription from "./HomeDescription/HomeDescription";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeDescription />
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

export default Home;
