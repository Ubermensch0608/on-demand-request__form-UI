import React, { FC } from "react";
import styled from "styled-components";

interface DropDownOptionProps {
  id: string;
  method: string;
  methodList: string[];
  onChange: React.ChangeEventHandler;
}

const DropDownOption: FC<DropDownOptionProps> = ({
  id,
  method,
  methodList,
  onChange,
}) => {
  return (
    <Option>
      <input
        id={id}
        type="checkbox"
        value={method}
        onChange={onChange}
        checked={method === methodList.find((check) => check === method)}
      />
      <label htmlFor={id}>{method}</label>
    </Option>
  );
};

export const Option = styled.li`
  display: flex;
  align-items: center;

  > input {
    margin: 0;
    margin-right: 10px;
  }
`;

export default DropDownOption;
