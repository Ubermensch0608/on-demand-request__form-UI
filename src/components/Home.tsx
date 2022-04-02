import React, { useState } from "react";
import { checkfilterActions, RequestState } from "store";
import { useAppDispatch, useAppSelector } from "store/hooks";
import FilterActions from "./FilterActions/FilterActions";

import HomeDescription from "./HomeDescription/HomeDescription";
import Requests from "./Requests/Requests";

import * as S from "./styled";

const Home = () => {
  const [isToggled, setIsToggled] = useState(false);
  const methodList = useAppSelector((state) => state.filter.methodList);
  const materialList = useAppSelector((state) => state.filter.materialList);
  const requests = useAppSelector((state) => state.requests.requests);

  let filteredRequests = requests;

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
    <S.HomeWrapper>
      <S.InnerContents>
        <HomeDescription />
        <FilterActions onCheckToggle={toggleCheckHandler} />
        <Requests requests={filteredRequests} />
      </S.InnerContents>
    </S.HomeWrapper>
  );
};

export default Home;
