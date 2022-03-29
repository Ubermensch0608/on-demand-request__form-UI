import React, { useState } from "react";
import { RequestState } from "store";
import { useAppSelector } from "store/hooks";
import FilterActions from "./FilterActions/FilterActions";

import HomeDescription from "./HomeDescription/HomeDescription";
import Requests from "./Requests/Requests";

import styled from "styled-components";

const Home = () => {
  const [isToggled, setIsToggled] = useState(false);
  const methodList = useAppSelector((state) => state.filter.methodList);
  const materialList = useAppSelector((state) => state.filter.materialList);
  const requests = useAppSelector((state) => state.requests.requests);

  let filteredRequests = requests;

  filteredRequests = [];
  const toggleCheckHandler = (isChecked: boolean) => {
    setIsToggled(!isChecked);
  };

  filteredRequests = requests.filter((request) => {
    let filterResult;

    if (methodList.length > 0 && materialList.length > 0) {
      filterResult =
        request.method.find(
          (element) => element === methodList.find((item) => item === element)
        ) &&
        request.material.find(
          (element) => element === materialList.find((item) => item === element)
        );
    } else if (methodList.length > 0 && materialList.length === 0) {
      filterResult = request.method.find(
        (element) => element === methodList.find((item) => item === element)
      );
    } else if (methodList.length === 0 && materialList.length > 0) {
      filterResult = request.material.find(
        (element) => element === materialList.find((item) => item === element)
      );
    } else if (methodList.length === 0 && materialList.length === 0) {
      filterResult = requests;
    }

    return filterResult;
  });

  const toggleFilterHandler = (currentRequests: RequestState[]) => {
    const returnRequests = isToggled
      ? currentRequests.filter((request) => request.status === "상담중")
      : currentRequests;

    return returnRequests;
  };

  filteredRequests = toggleFilterHandler(filteredRequests);

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

  @media (min-width: 1439px) {
    max-width: max-content;
  }
`;

export const InnerContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 110px 120px;

  @media (max-width: 767px) {
    margin: 76px 20px 38px 20px;
  }
`;

export default Home;
