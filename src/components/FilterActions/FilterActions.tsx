import React, { FC } from "react";

import { Button, Toggle } from "components/UI";
import styled from "styled-components";
import FilterDropDown from "./FilterDropDown";

const FilterActions: FC<{ onCheckToggle: (isChecked: boolean) => void }> = (
  props
) => {
  return (
    <FiltersWrapper>
      <FilterLeft>
        <FilterDropDown />
      </FilterLeft>
      <FilterRight>
        <Toggle id="on-counsle" onCheckToggle={props.onCheckToggle} />
        <ToggleDesc>상담 중인 요청만 보기</ToggleDesc>
      </FilterRight>
    </FiltersWrapper>
  );
};

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
`;

export const FilterLeft = styled.div`
  display: flex;
`;

export const FilterRight = styled.div`
  display: flex;
  align-items: center;
`;

export const DropDown = styled(Button)``;

export const ToggleDesc = styled.div`
  margin-left: 16px;
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;

export default FilterActions;
