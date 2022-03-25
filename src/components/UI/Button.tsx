import React, { FC } from "react";
import styled, { css } from "styled-components";

const Button: FC<{ theme?: string }> = ({ children, theme }) => {
  return <StyledButton theme={theme}>{children}</StyledButton>;
};

export const StyledButton = styled.button<{ theme: string }>`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  ${(props) =>
    (props.theme === "blue" &&
      css`
        color: #fff;
        background: #2196f3;
      `) ||
    (props.theme === "white" &&
      css`
        outline: 1px solid #2196f3;
        color: #2196f3;
        background: transparent;
      `)};
`;

export default Button;
