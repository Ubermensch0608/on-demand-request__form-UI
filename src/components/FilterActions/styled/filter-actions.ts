import { Button } from "components/UI";
import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0;

  @media (max-width: 767px) {
    flex-direction: column;

    > div:nth-child(1) {
      margin-bottom: 10px;
    }
  }
`;

export const FilterLeft = styled.div`
  display: flex;
`;

export const FilterRight = styled.div`
  display: flex;
  align-items: center;
`;

export const DropDown = styled(Button)``;

export const ToggleDesc = styled.div`
  margin-left: 16px;
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;
