import React, { useState } from "react";
import HomeDescription from "./HomeDescription/HomeDescription";
import { useAppSelector } from "store/hooks";
import Requests from "./Requests/Requests";
import FilterActions from "./FilterActions/FilterActions";

import styled from "styled-components";

const Home = () => {
  const [isToggled, setIsToggled] = useState(false);
  const requests = useAppSelector((state) => state.requests.requests);

  const toggleCheckHandler = (isChecked: boolean) => {
    setIsToggled(!isChecked);
  };

  console.log(isToggled);
  const filteredRequests = isToggled
    ? requests.filter((request) => request.status === "상담중")
    : requests;

  return (
    <HomeWrapper>
      <InnerContents>
        <HomeDescription />
        <FilterActions onCheckToggle={toggleCheckHandler} />
        <Requests requests={filteredRequests} />
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
  margin: 110px 120px; ;
`;

export default Home;
