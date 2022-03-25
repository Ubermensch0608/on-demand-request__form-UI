import React from "react";
import HomeDescription from "./HomeDescription/HomeDescription";
import styled from "styled-components";
import { useAppSelector } from "store/hooks";
import Requests from "./Requests/Requests";
import FilterActions from "./FilterActions/FilterActions";

const Home = () => {
  const requests = useAppSelector((state) => state.requests.requests);

  return (
    <HomeWrapper>
      <InnerContents>
        <HomeDescription />
        <FilterActions />
        <Requests requests={requests} />
      </InnerContents>
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

export const InnerContents = styled.div`
  margin: 0 120px; ;
`;

export default Home;
