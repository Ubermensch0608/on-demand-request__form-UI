import React, { useState } from "react";
import HomeDescription from "./HomeDescription/HomeDescription";
import { useAppSelector } from "store/hooks";
import Requests from "./Requests/Requests";
import FilterActions from "./FilterActions/FilterActions";

import styled from "styled-components";
import { RequestState } from "store";

const Home = () => {
  const [isToggled, setIsToggled] = useState(false);
  const checkedBoxList = useAppSelector((state) => state.filter.checkedBoxList);
  const requests = useAppSelector((state) => state.requests.requests);

  let filteredRequests = requests;

  const toggleCheckHandler = (isChecked: boolean) => {
    setIsToggled(!isChecked);
  };

  const toggleFilterHandler = (currentRequests: RequestState[]) => {
    const returnRequests = isToggled
      ? currentRequests.filter((request) => request.status === "상담중")
      : currentRequests;

    return returnRequests;
  };

  let methodfilteredRequests = requests.filter((request) => {
    let methodList;

    methodList =
      request.method.find(
        (element) => element === checkedBoxList.find((item) => item === element)
      ) ||
      request.material.find(
        (element) => element === checkedBoxList.find((item) => item === element)
      );

    return methodList;
  });

  return (
    <HomeWrapper>
      <InnerContents>
        <HomeDescription />
        <FilterActions onCheckToggle={toggleCheckHandler} />
        <Requests requests={methodfilteredRequests} />
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
