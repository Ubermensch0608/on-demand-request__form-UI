import React, {
  ChangeEvent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

import { checkfilterActions, dropDownActions } from "store";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { DUMMY_MATERIAL, DUMMY_METHOD } from "common/dummy-data";
import DropDownOption from "./DropDownOption";
import { Button } from "components/UI";

import RefreshIcon from "assets/img/refresh_24px.png";
import ArrowDownIcon from "assets/img/arrow_drop_down_24px.png";
import * as S from "./styled/filter-drop-down";

const FilterDropDown = () => {
  const dispatch = useAppDispatch();
  const methodAreaRef = useRef<HTMLSpanElement>(null);
  const materialAreaRef = useRef<HTMLSpanElement>(null);

  const methodList = useAppSelector((state) => state.filter.methodList);
  const materialList = useAppSelector((state) => state.filter.materialList);

  const isMethodOpen = useAppSelector((state) => state.dropdown.isMethodOpen);
  const isMaterialOpen = useAppSelector(
    (state) => state.dropdown.isMaterialOpen
  );

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

  const methodOpenHandler = (event: React.MouseEvent<HTMLElement>) => {
    const targetId = event.currentTarget.id;

    if (targetId.includes("button")) {
      if (!isMethodOpen) {
        dispatch(dropDownActions.method(true));
      } else if (isMethodOpen) {
        dispatch(dropDownActions.method(false));
      }
    }
  };

  const materialOpenHandler = (event: React.MouseEvent<HTMLElement>) => {
    const targetId = event.currentTarget.id;

    if (targetId.includes("button")) {
      if (!isMaterialOpen) {
        dispatch(dropDownActions.material(true));
      } else if (isMaterialOpen) {
        dispatch(dropDownActions.material(false));
      }
    }
  };

  const globalClickHandler = (event: any) => {
    const targetId = event.target.id;

    if (!targetId.includes("method")) {
      dispatch(dropDownActions.method(false));
    }

    if (!targetId.includes("material")) {
      dispatch(dropDownActions.material(false));
    }
  };

  useEffect(() => {
    document.addEventListener("click", globalClickHandler);

    return () => {
      document.removeEventListener("click", globalClickHandler);
    };
  }, []);

  return (
    <S.FilterWrapper>
      <span>
        <Button id="method button" theme="clear" onClick={methodOpenHandler}>
          <S.ButtonInner id="method button">
            <span id="method button">가공방식</span>
            <span id="method button">
              <img
                id="method button"
                src={ArrowDownIcon}
                alt="arrow-down-icon"
                width={10}
                height={5}
              />
            </span>
          </S.ButtonInner>
        </Button>
        {isMethodOpen && (
          <S.DropDownWrapper id="method option">
            {DUMMY_METHOD.map((item) => (
              <DropDownOption
                key={item.id}
                id={item.id}
                method={item.method}
                methodList={methodList}
                onChange={countCheckHandler}
              />
            ))}
          </S.DropDownWrapper>
        )}
      </span>
      <span id="material button" ref={materialAreaRef}>
        <Button
          id="material button"
          theme="clear"
          onClick={materialOpenHandler}
        >
          <S.ButtonInner id="material button">
            <span id="material button">
              재료{materialList.length > 0 && "(" + materialList.length + ")"}
            </span>
            <span id="material button">
              <img
                id="material button"
                src={ArrowDownIcon}
                alt="arrow-down-icon"
                width={10}
                height={5}
              />
            </span>
          </S.ButtonInner>
        </Button>
        {isMaterialOpen && (
          <S.DropDownWrapper>
            {DUMMY_MATERIAL.map((item) => (
              <DropDownOption
                key={item.id}
                id={item.id}
                method={item.material}
                methodList={materialList}
                onChange={countCheckHandler}
              />
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
