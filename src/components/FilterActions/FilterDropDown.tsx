import React, { ChangeEvent, useState } from "react";

import { checkfilterActions } from "store";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { Button } from "components/UI";
import { DUMMY_MATERIAL, DUMMY_METHOD } from "common/dummy-data";

import RefreshIcon from "assets/img/refresh_24px.png";
import ArrowDownIcon from "assets/img/arrow_drop_down_24px.png";
import styled from "styled-components";

export const CHECKED_LIST = "checkedli";

const FilterDropDown = () => {
  const dispatch = useAppDispatch();
  const [isMethodFocused, setIsMethodFocused] = useState(false);
  const [isMaterialFocused, setIsMaterialFocused] = useState(false);
  const methodList = useAppSelector((state) => state.filter.methodList);
  const materialList = useAppSelector((state) => state.filter.materialList);

  const methodCheckHandler = () => {
    setIsMaterialFocused(false);
    setIsMethodFocused((prev) => !prev);
  };

  const materialCheckHandler = () => {
    setIsMethodFocused(false);
    setIsMaterialFocused((prev) => !prev);
  };

  const countCheckHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const currentisChecked = event.target.checked;
    const checkedValue = event.target.value;

    if (currentisChecked) {
      dispatch(checkfilterActions.checked(checkedValue));
    } else {
      dispatch(checkfilterActions.unChecked(checkedValue));
    }
  };

  const checkResetHandler = () => {
    dispatch(checkfilterActions.reset());
  };

  return (
    <FilterWrapper>
      <span>
        <Button theme="clear" onClick={methodCheckHandler}>
          <ButtonInner>
            <span>가공방식</span>
            <span>
              <img
                src={ArrowDownIcon}
                alt="arrow-down-icon"
                width={10}
                height={5}
              />
            </span>
          </ButtonInner>
        </Button>
        {isMethodFocused && (
          <DropDownWrapper>
            {DUMMY_METHOD.map((item) => (
              <li key={item.id}>
                <span>
                  <input
                    type="checkbox"
                    onChange={countCheckHandler}
                    value={item.method}
                    checked={
                      item.method ===
                      methodList.find((check) => check === item.method)
                    }
                  />
                </span>
                <span>{item.method}</span>
              </li>
            ))}
          </DropDownWrapper>
        )}
      </span>
      <span>
        <Button theme="clear" onClick={materialCheckHandler}>
          <ButtonInner>
            <span>
              재료{materialList.length > 0 && "(" + materialList.length + ")"}
            </span>
            <span>
              <img
                src={ArrowDownIcon}
                alt="arrow-down-icon"
                width={10}
                height={5}
              />
            </span>
          </ButtonInner>
        </Button>
        {isMaterialFocused && (
          <DropDownWrapper>
            {DUMMY_MATERIAL.map((item) => (
              <li key={item.id}>
                <span>
                  <input
                    type="checkbox"
                    onChange={countCheckHandler}
                    value={item.material}
                    checked={
                      item.material ===
                      materialList.find((check) => check === item.material)
                    }
                  />
                </span>
                <span>{item.material}</span>
              </li>
            ))}
          </DropDownWrapper>
        )}
      </span>
      {methodList.length + materialList.length > 0 && (
        <FilterResetBtn>
          <Button theme="refresh" onClick={checkResetHandler}>
            <img src={RefreshIcon} alt="refresh-icon" width={16} height={16} />
            <span>필러링 리셋</span>
          </Button>
        </FilterResetBtn>
      )}
    </FilterWrapper>
  );
};

export const FilterWrapper = styled.span`
  display: flex;

  > span > * {
    margin-bottom: 4px;
  }

  > span:nth-child(1) {
    margin-right: 8px;
  }
`;

export const ButtonInner = styled.div`
  display: flex;
  align-items: stretch;

  > span:nth-child(1) {
    margin-right: 12px;
  }
`;

export const DropDownWrapper = styled.ul`
  position: absolute;
  z-index: 99;
  background-color: #fff;
  border: 1px solid #939fa5;
  border-radius: 4px;
  padding: 17px 12px;
  font-size: 14px;
  line-height: 20px;
  min-width: 90px;
`;

export const FilterResetBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > button > span {
    padding-left: 12px;
  }
`;

export default FilterDropDown;
