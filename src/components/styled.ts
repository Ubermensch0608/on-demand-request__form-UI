import styled from "styled-components";

export const HomeWrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 99;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1439px) {
  }
`;

export const InnerContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 110px 120px;

  @media (max-width: 767px) {
    margin: 76px 20px 38px 20px;
  }
`;
