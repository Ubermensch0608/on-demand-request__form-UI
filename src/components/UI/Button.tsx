import React, { FC } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  theme: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  btnRef?: React.Ref<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, theme, onClick, btnRef }) => {
  return (
    <StyledButton onClick={onClick} ref={btnRef} theme={theme}>
      {children}
    </StyledButton>
  );
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
        outline: 1px solid #2196f3;
        color: #fff;
        background: #2196f3;
      `) ||
    (props.theme === "white" &&
      css`
        outline: 1px solid #2196f3;
        color: #2196f3;
        background: transparent;
      `) ||
    (props.theme === "clear" &&
      css`
        outline: 1px solid #939fa5;
        color: #323d45;
        background: transparent;
        :hover {
          outline: 2px solid #2196f3;
        }

        :focus {
          color: #fff;
          background-color: #1565c0;
          outline: 1px solid #1565c0;
        }
      `) ||
    (props.theme === "refresh" &&
      css`
        outline: 1px solid none;
        color: #2196f3;
        background: transparent;
        font-size: 12px;
        font-weight: 400;
      `)};
`;

export { Button };
