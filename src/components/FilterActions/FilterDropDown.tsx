import React, { FocusEventHandler, useState } from "react";

import { DUMMY_MATERIAL, DUMMY_METHOD } from "common/dummy-data";
import { Button } from "components/UI";

import ArrowDownIcon from "assets/img/arrow_drop_down_24px.png";
import styled from "styled-components";

const FilterDropDown = () => {
  const [isMethodFocused, setIsMethodFocused] = useState(false);
  const [isMaterialFocused, setIsMaterialFocused] = useState(false);

  const methodCheckHandler = () => {
    setIsMethodFocused((prev) => !prev);

    if (isMaterialFocused) {
      setIsMethodFocused(false);
    }
  };

  const materialCheckHandler = () => {
    setIsMaterialFocused((prev) => !prev);

    if (isMethodFocused) {
      setIsMaterialFocused(false);
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
                  <input type="checkbox" />
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
                  <input type="checkbox" />
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
    margin-bottom: 10px;
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
  border: 1px solid #939fa5;
  border-radius: 4px;
  padding: 17px 12px;

  font-size: 14px;
  line-height: 20px;
`;

export default FilterDropDown;
