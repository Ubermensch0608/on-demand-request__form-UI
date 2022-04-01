import React, {
  ChangeEvent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

import { checkfilterActions } from "store";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { Button } from "components/UI";
import { DUMMY_MATERIAL, DUMMY_METHOD } from "common/dummy-data";

import RefreshIcon from "assets/img/refresh_24px.png";
import ArrowDownIcon from "assets/img/arrow_drop_down_24px.png";
import * as S from "./styled/filter-drop-down";
import DropDownOption from "./DropDownOption";
import { isCallExpression, Node } from "typescript";

const FilterDropDown = () => {
  const dispatch = useAppDispatch();
  const methodAreaRef = useRef<HTMLSpanElement>(null);
  const materialAreaRef = useRef<HTMLSpanElement>(null);

  const methodList = useAppSelector((state) => state.filter.methodList);
  const materialList = useAppSelector((state) => state.filter.materialList);
  const isCheckBoxOpened = useAppSelector((state) => state.filter.isOpen);

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

  const methodCheckHandler = (event: any) => {
    if (
      methodAreaRef.current &&
      methodAreaRef!.current!.contains(event.target)
    ) {
      console.log("method-open");
      dispatch(
        checkfilterActions.isOpen({
          method: true,
          material: false,
        })
      );
    } else if (
      methodAreaRef.current &&
      !methodAreaRef!.current!.contains(event.target)
    ) {
      console.log("method-close");
      dispatch(
        checkfilterActions.isOpen({
          method: false,
          material: false,
        })
      );
    }

    if (
      materialAreaRef.current &&
      materialAreaRef!.current!.contains(event.target)
    ) {
      console.log("material-open");
      dispatch(
        checkfilterActions.isOpen({
          method: false,
          material: true,
        })
      );
    } else if (
      !materialAreaRef.current &&
      materialAreaRef!.current!.contains(event.target)
    ) {
      console.log("material-close");
      dispatch(
        checkfilterActions.isOpen({
          method: false,
          material: false,
        })
      );
    }
  };

  const materialCheckHandler = (event: any) => {
    if (materialAreaRef && materialAreaRef!.current!.contains(event.target)) {
      console.log("You clicked inside of me!");
      dispatch(
        checkfilterActions.isOpen({
          method: isCheckBoxOpened.method,
          material: true,
        })
      );
    } else {
      console.log("You clicked outside of me!");
      dispatch(
        checkfilterActions.isOpen({
          method: isCheckBoxOpened.method,
          material: false,
        })
      );
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", methodCheckHandler);

    return () => {
      document.removeEventListener("mousedown", methodCheckHandler);
    };
  }, []);

  return (
    <S.FilterWrapper>
      <span id="method" ref={methodAreaRef}>
        <Button theme="clear">
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
        {isCheckBoxOpened.method && (
          <S.DropDownWrapper>
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
      <span id="material" ref={materialAreaRef}>
        <Button theme="clear">
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
        {isCheckBoxOpened.material && (
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
