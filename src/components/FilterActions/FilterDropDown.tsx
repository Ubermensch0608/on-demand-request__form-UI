import React, { ChangeEvent, useRef, useState } from "react";

import { checkfilterActions } from "store";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { Button } from "components/UI";
import { DUMMY_MATERIAL, DUMMY_METHOD } from "common/dummy-data";

import RefreshIcon from "assets/img/refresh_24px.png";
import ArrowDownIcon from "assets/img/arrow_drop_down_24px.png";
import * as S from "./styled/filter-drop-down";

const FilterDropDown = () => {
  const dispatch = useAppDispatch();
  const methodBtnRef = useRef<HTMLButtonElement>(null);
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
    <S.FilterWrapper>
      <span>
        <Button
          theme="clear"
          onClick={methodCheckHandler}
          btnRef={methodBtnRef}
        >
          <S.ButtonInner>
            <span>가공방식</span>
            <span>
              <img
                src={ArrowDownIcon}
                alt="arrow-down-icon"
                width={10}
                height={5}
              />
            </span>
          </S.ButtonInner>
        </Button>
        {isMethodFocused && (
          <S.DropDownWrapper>
            {DUMMY_METHOD.map((item) => (
              <li key={item.id}>
                <input
                  id={item.id}
                  type="checkbox"
                  value={item.method}
                  onChange={countCheckHandler}
                  checked={
                    item.method ===
                    methodList.find((check) => check === item.method)
                  }
                />
                <label htmlFor={item.id}>{item.method}</label>
              </li>
            ))}
          </S.DropDownWrapper>
        )}
      </span>
      <span>
        <Button theme="clear" onClick={materialCheckHandler}>
          <S.ButtonInner>
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
          </S.ButtonInner>
        </Button>
        {isMaterialFocused && (
          <S.DropDownWrapper>
            {DUMMY_MATERIAL.map((item) => (
              <li key={item.id}>
                <input
                  id={item.id}
                  type="checkbox"
                  onChange={countCheckHandler}
                  value={item.material}
                  checked={
                    item.material ===
                    materialList.find((check) => check === item.material)
                  }
                />
                <label htmlFor={item.id}>{item.material}</label>
              </li>
            ))}
          </S.DropDownWrapper>
        )}
      </span>
      {methodList.length + materialList.length > 0 && (
        <S.FilterResetBtn>
          <Button theme="refresh" onClick={checkResetHandler}>
            <img src={RefreshIcon} alt="refresh-icon" width={16} height={16} />
            <span>필러링 리셋</span>
          </Button>
        </S.FilterResetBtn>
      )}
    </S.FilterWrapper>
  );
};

export default FilterDropDown;
