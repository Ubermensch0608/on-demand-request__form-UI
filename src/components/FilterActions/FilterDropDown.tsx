import React, { ChangeEvent, useState } from "react";

import { DUMMY_MATERIAL, DUMMY_METHOD } from "common/dummy-data";
import { Button } from "components/UI";

import ArrowDownIcon from "assets/img/arrow_drop_down_24px.png";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { filterActions } from "store";

const FilterDropDown = () => {
  const dispatch = useAppDispatch();
  const [isMethodFocused, setIsMethodFocused] = useState(false);
  const [isMaterialFocused, setIsMaterialFocused] = useState(false);
  const checkedList = useAppSelector((state) => state.filter.checkedBoxList);

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
      dispatch(filterActions.checked(checkedValue));
    } else {
      dispatch(filterActions.unChecked(checkedValue));
    }
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
                      checkedList.find((check) => check === item.method)
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
            <span>재료</span>
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
                      checkedList.find((check) => check === item.material)
                    }
                  />
                </span>
                <span>{item.material}</span>
              </li>
            ))}
          </DropDownWrapper>
        )}
      </span>
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

export default FilterDropDown;
