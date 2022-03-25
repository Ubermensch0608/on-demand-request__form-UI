import React, { FC, Fragment, useState } from "react";
import styled from "styled-components";

const Toggle: FC<{
  id: string;
  onCheckToggle: (isChecked: boolean) => void;
}> = ({ id, onCheckToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const filterCounselHandler = () => {
    setIsChecked((prev) => !prev);
    onCheckToggle(isChecked);
  };

  return (
    <Fragment>
      <div onClick={filterCounselHandler}>
        <Overlay htmlFor={id} isChecked={isChecked} />
        <Slider isChecked={isChecked} />
      </div>
      <CheckBox id={id} type="checkbox" />
    </Fragment>
  );
};

const Overlay = styled.label<{ isChecked: boolean }>`
  position: absolute;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => (props.isChecked ? `#2196F3` : `#f5f5f5`)};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.4s ease;
  transform: ${(props) =>
    props.isChecked
      ? `translate3d(15px, -3.5px ,0)`
      : `translate3d(0px, -3.5px, 0)`};
`;

const Slider = styled.div<{ isChecked: boolean }>`
  width: 34px;
  height: 14px;
  background-color: ${(props) => (props.isChecked ? `#BBDEFB` : `#c2c2c2`)};
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const CheckBox = styled.input`
  display: none;
`;

export { Toggle };
