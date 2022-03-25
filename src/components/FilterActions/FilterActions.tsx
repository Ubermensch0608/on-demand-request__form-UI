import React from "react";

import { Button, Toggle } from "components/UI";
import styled from "styled-components";

const FilterActions = () => {
  return (
    <FiltersWrapper>
      <FilterLeft>
        <Button></Button>
        <Button></Button>
      </FilterLeft>
      <FilterRight>
        <Toggle id="on-counsle" />
        <div>상담 중인 요청만 보기</div>
      </FilterRight>
    </FiltersWrapper>
  );
};

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterLeft = styled.div`
  display: flex;
`;

export const FilterRight = styled.div`
  display: flex;
`;

export const DropDown = styled(Button)``;

export default FilterActions;
