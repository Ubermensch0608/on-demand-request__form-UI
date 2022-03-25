import React from "react";
import HomeDescription from "./HomeDescription/HomeDescription";
import styled from "styled-components";
import { useAppSelector } from "store/hooks";
import Requests from "./Requests/Requests";

const Home = () => {
  const requests = useAppSelector((state) => state.requests.requests);

  return (
    <HomeWrapper>
      <HomeDescription />
      <div>필터</div>
      <Requests requests={requests} />
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

export default Home;
