import React, { FC } from "react";

import { Toggle } from "components/UI";
import FilterDropDown from "./FilterDropDown";
import * as S from "./styled/filter-actions";

export interface FilterActionsProp {
  onCheckToggle: (isChecked: boolean) => void;
}

const FilterActions: FC<FilterActionsProp> = ({ onCheckToggle }) => {
  return (
    <S.FiltersWrapper>
      <S.FilterLeft>
        <FilterDropDown />
      </S.FilterLeft>
      <S.FilterRight>
        <Toggle id="on-counsle" onCheckToggle={onCheckToggle} />
        <S.ToggleDesc>상담 중인 요청만 보기</S.ToggleDesc>
      </S.FilterRight>
    </S.FiltersWrapper>
  );
};

export default FilterActions;
